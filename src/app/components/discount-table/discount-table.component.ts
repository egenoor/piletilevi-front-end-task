import { formatCurrency, formatDate } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { map } from 'rxjs'
import { Filters } from '../../common/types'
import { Discount } from '../../models/discount'
import { MappedDiscount } from '../../models/mapped-discount'
import { DiscountService } from '../../services/discount/discount.service'

@Component({
  selector: 'app-discount-table',
  templateUrl: './discount-table.component.html',
  styleUrl: './discount-table.component.scss'
})
export class DiscountTableComponent implements OnInit {
  private _filters: Filters = {freeText: "", category: ""};
  allDiscounts: MappedDiscount[] = [];
  filteredDiscounts: MappedDiscount[] = [];
  activeDiscounts: MappedDiscount[] = [];
  upcomingDiscounts: MappedDiscount[] = [];
  archivedDiscounts: MappedDiscount[] = [];

  dateFormat = "dd.MM.yyyy HH:mm";
  locale = "en-US";
  currency = "€"
  
  @Input() set filters(value: Filters){
    this._filters = value;
    this.filteredDiscounts = this.filterMappedDiscounts();
  };

  get filters(): Filters {
    return this._filters;
  }

  constructor(private discountService: DiscountService){}

  filterMappedDiscounts(): MappedDiscount[] {
    return this.allDiscounts.filter(discount => {
      const hasFreeText = this.filters.freeText !== "";
      const hasCategory = this.filters.category !== "";

      if (hasFreeText && hasCategory) {
        return discount.name.toLowerCase().includes(this.filters.freeText.toLowerCase()) && discount.category === this.filters.category
      } else if (hasFreeText && !hasCategory) {
        return discount.name.toLowerCase().includes(this.filters.freeText.toLowerCase())
      } else if (!hasFreeText && hasCategory) {
        return discount.name === this.filters.category
      }

      return true;
    })
  }

  mapDiscounts(discounts: Discount[]) {
    return discounts.map((discount) => {
      return {
        name: discount.name,
        category: discount.category,
        timePeriod: formatDate(discount.startDate, this.dateFormat, this.locale)
          + " - "
          + formatDate(discount.endDate, this.dateFormat, this.locale),
        amount: formatCurrency(discount.discountAmount, this.locale, this.currency)
      }
    })
  }



  ngOnInit(): void {
      this.discountService.getDiscounts().pipe(map(this.mapDiscounts.bind(this))).subscribe((response) => {
        this.allDiscounts = response;
        this.filteredDiscounts = response;
      });
  }
}
