import { Component, Input, OnInit } from '@angular/core'
import { map } from 'rxjs'
import { Filters } from '../../common/interfaces/filters.interface'
import { MappedDiscount } from '../../common/interfaces/mapped-discount.interface'
import { DiscountTab } from '../../common/types/discount-tab.type'
import { DiscountFilterService } from '../../services/discount-filter/discount-filter.service'
import { DiscountMapperService } from '../../services/discount-mapper/discount-mapper.service'
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

  @Input() set filters(value: Filters){
    this._filters = value;
    this.filteredDiscounts = this.getFilteredDiscounts().filter(
      this.discountFilterService.getActiveTabFilterFn(this.activeTab)
    );
  };

  get filters(): Filters {
    return this._filters;
  }

  constructor(
    private discountService: DiscountService,
    private discountMapperService: DiscountMapperService,
    private discountFilterService: DiscountFilterService
  ){}

  handleTabChange(tabName: DiscountTab) {
    this.activeTab = tabName;
    this.filteredDiscounts = this.getFilteredDiscounts().filter(
      this.discountFilterService.getActiveTabFilterFn(this.activeTab)
    );
  }

  handlePageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
  }

  getDiscountsPerPage(): MappedDiscount[] {
    const pageStartIndex = (this.pageNumber - 1) * this.pageSize;
    const pageEndIndex = this.pageNumber * this.pageSize;
    return this.filteredDiscounts.slice(pageStartIndex, pageEndIndex)
  }

  getFilteredDiscounts (): MappedDiscount[] {
    return this.allDiscounts.filter((discount) => {
      return this.discountFilterService.filterBySearchCriteria(discount, this.filters)
    });
  }

  ngOnInit(): void {
    this.discountService.getDiscounts().pipe(map(this.discountMapperService.mapDiscounts)).subscribe((response) => {
      this.allDiscounts = response;
      const filteredDiscounts = this.getFilteredDiscounts();
      this.activeDiscounts = filteredDiscounts.filter(this.discountFilterService.filterActiveDiscounts);
      this.upcomingDiscounts = filteredDiscounts.filter(this.discountFilterService.filterUpcomingDiscounts);
      this.archivedDiscounts = filteredDiscounts.filter(this.discountFilterService.filterArchivedDiscounts);
      this.filteredDiscounts = this.activeDiscounts;
    });
  }
}
