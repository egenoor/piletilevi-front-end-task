import { formatCurrency, formatDate } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { map, Observable } from 'rxjs'
import { Discount } from '../../models/discount'
import { MappedDiscount } from '../../models/mapped-discount'
import { DiscountService } from '../../services/discount/discount.service'

@Component({
  selector: 'app-discount-table',
  templateUrl: './discount-table.component.html',
  styleUrl: './discount-table.component.scss'
})
export class DiscountTableComponent implements OnInit {
  discounts$!: Observable<MappedDiscount[]>;
  dateFormat = "dd.MM.yyyy HH:mm";
  locale = "en-US";
  currency = "€"

  constructor(private discountService: DiscountService){}

  mapDiscounts(discounts: Discount[]): MappedDiscount[] {
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
      this.discounts$ = this.discountService.getDiscounts().pipe(map(this.mapDiscounts.bind(this)));
  }
}
