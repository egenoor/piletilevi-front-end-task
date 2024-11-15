import { formatCurrency, formatDate } from '@angular/common'
import { Injectable } from '@angular/core'
import { Discount } from '../../models/discount'

@Injectable({
  providedIn: 'root'
})
export class DiscountMapperService {
  mapDiscounts(discounts: Discount[]) {
    const dateFormat = "dd.MM.yyyy HH:mm";
    const locale = "et-EE";
    const currency = "€";

    return discounts.map((discount) => {
      return {
        name: discount.name,
        category: discount.category,
        timePeriod: formatDate(discount.startDate, dateFormat, locale)
          + " - "
          + formatDate(discount.endDate, dateFormat, locale),
        startDate: new Date(discount.startDate),
        endDate: new Date(discount.endDate),
        amount: formatCurrency(discount.discountAmount, locale, currency, "EUR", "1.0-2")
      }
    })
  }
}
