import { Injectable } from '@angular/core'
import { Filters } from '../../common/interfaces/filters.interface'
import { MappedDiscount } from '../../common/interfaces/mapped-discount.interface'
import { DiscountTab } from '../../common/types/discount-tab.type'

@Injectable({
  providedIn: 'root'
})
export class DiscountFilterService {
  filterActiveDiscounts(discount: MappedDiscount): boolean {
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

  getActiveTabFilterFn(activeTab: DiscountTab) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let tabFilterFn = (_discount: MappedDiscount) => true;
    if (activeTab === "currentlyActive") {
      tabFilterFn = this.filterActiveDiscounts;
    } else if (activeTab === "upcoming") {
      tabFilterFn = this.filterUpcomingDiscounts;
    } else if (activeTab === "archived") {
      tabFilterFn = this.filterArchivedDiscounts;
    }
    return tabFilterFn;
  }

  filterBySearchCriteria(discount: MappedDiscount, filters: Filters): boolean {
    const hasFreeText = filters.freeText !== "";
    const hasCategory = filters.categories.length > 0;

    if (hasFreeText && hasCategory) {
      return discount.name.toLowerCase().includes(filters.freeText.toLowerCase()) && filters.categories.includes(discount.category)
    } else if (hasFreeText && !hasCategory) {
      return discount.name.toLowerCase().includes(filters.freeText.toLowerCase())
    } else if (!hasFreeText && hasCategory) {
      return filters.categories.includes(discount.category)
    }

    return true;
  }
}
