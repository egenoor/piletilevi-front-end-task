import { formatCurrency, formatDate } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { map } from 'rxjs'
import { Filters } from '../../common/interfaces/filters.interface'
import { MappedDiscount } from '../../common/interfaces/mapped-discount.interface'
import { DiscountTab } from '../../common/types/discount-tab.type'
import { Discount } from '../../models/discount'
import { DiscountService } from '../../services/discount/discount.service'

@Component({
  selector: 'app-discount-table',
  templateUrl: './discount-table.component.html',
  styleUrl: './discount-table.component.scss'
})
export class DiscountTableComponent implements OnInit {
  private _filters: Filters = {freeText: "", categories: []};
  activeTab: DiscountTab = "currentlyActive";
  pageNumber = 1;
  pageSize = 10;
  allDiscounts: MappedDiscount[] = [];
  filteredDiscounts: MappedDiscount[] = [];
  activeDiscounts: MappedDiscount[] = [];
  upcomingDiscounts: MappedDiscount[] = [];
  archivedDiscounts: MappedDiscount[] = [];

  dateFormat = "dd.MM.yyyy HH:mm";
  locale = "et-EE";
  currency = "€"
  
  @Input() set filters(value: Filters){
    this._filters = value;
    this.filteredDiscounts = this.getFilteredDiscounts().filter(this.getActiveTabFilterFn.bind(this)());
  };

  get filters(): Filters {
    return this._filters;
  }

  handleTabChange(tabName: DiscountTab) {
    this.activeTab = tabName;
    this.filteredDiscounts = this.getFilteredDiscounts().filter(this.getActiveTabFilterFn.bind(this)());
  }

  handlePageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  getDiscountsPerPage(): MappedDiscount[] {
    const pageStartIndex = (this.pageNumber - 1) * this.pageSize;
    const pageEndIndex = this.pageNumber * this.pageSize;
    return this.filteredDiscounts.slice(pageStartIndex, pageEndIndex)
  }

  constructor(private discountService: DiscountService){}

  getFilteredDiscounts (): MappedDiscount[] {
    return this.allDiscounts.filter(this.filterBySearchCriteria.bind(this));
  }

  filterActiveDiscounts(discount: MappedDiscount): boolean{
    const currentDate = new Date();
    const isStartDateBeforeNow = discount.startDate.getTime() <= currentDate.getTime();
    const isEndDateAfterNow = discount.endDate.getTime() >= currentDate.getTime();
    return isStartDateBeforeNow && isEndDateAfterNow;
  }

  filterUpcomingDiscounts(discount: MappedDiscount): boolean {
    const currentDate = new Date();
    return discount.startDate.getTime() > currentDate.getTime();
  }

  filterArchivedDiscounts(discount: MappedDiscount): boolean {
    const currentDate = new Date();
    return discount.endDate.getTime() < currentDate.getTime();
  }

  getActiveTabFilterFn() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let tabFilterFn = (_discount: MappedDiscount) => true;
    if (this.activeTab === "currentlyActive") {
      tabFilterFn = this.filterActiveDiscounts;
    } else if (this.activeTab === "upcoming") {
      tabFilterFn = this.filterUpcomingDiscounts;
    } else if (this.activeTab === "archived") {
      tabFilterFn = this.filterArchivedDiscounts;
    }
    return tabFilterFn;
  }

  filterBySearchCriteria(discount: MappedDiscount): boolean {
    const hasFreeText = this.filters.freeText !== "";
    const hasCategory = this.filters.categories.length > 0;

    if (hasFreeText && hasCategory) {
      return discount.name.toLowerCase().includes(this.filters.freeText.toLowerCase()) && this.filters.categories.includes(discount.category)
    } else if (hasFreeText && !hasCategory) {
      return discount.name.toLowerCase().includes(this.filters.freeText.toLowerCase())
    } else if (!hasFreeText && hasCategory) {
      return this.filters.categories.includes(discount.category)
    }

    return true;
  }

  mapDiscounts(discounts: Discount[]) {
    return discounts.map((discount) => {
      return {
        name: discount.name,
        category: discount.category,
        timePeriod: formatDate(discount.startDate, this.dateFormat, this.locale)
          + " - "
          + formatDate(discount.endDate, this.dateFormat, this.locale),
        startDate: new Date(discount.startDate),
        endDate: new Date(discount.endDate),
        amount: formatCurrency(discount.discountAmount, this.locale, this.currency, "EUR", "1.0-2")
      }
    })
  }

  ngOnInit(): void {
    this.discountService.getDiscounts().pipe(map(this.mapDiscounts.bind(this))).subscribe((response) => {
      this.allDiscounts = response;
      const filteredDiscounts = this.getFilteredDiscounts();
      this.activeDiscounts = filteredDiscounts.filter(this.filterActiveDiscounts);
      this.upcomingDiscounts = filteredDiscounts.filter(this.filterUpcomingDiscounts.bind(this));
      this.archivedDiscounts = filteredDiscounts.filter(this.filterArchivedDiscounts.bind(this));
      this.filteredDiscounts = this.activeDiscounts;
    });
  }
}
