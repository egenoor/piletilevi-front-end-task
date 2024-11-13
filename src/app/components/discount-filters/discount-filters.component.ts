import { Component, Input } from '@angular/core'
import { Filters } from '../../common/types'
import { Category } from '../../enums/category'

@Component({
  selector: 'app-discount-filters',
  templateUrl: './discount-filters.component.html',
  styleUrl: './discount-filters.component.scss'
})
export class DiscountFiltersComponent {
  freeText: string = "";
  category: Category | "" = "";
  @Input({required: true}) onSubmit!: (filters: Filters) => void;
  
  searchDiscounts(freeText: string, category: Category | "") {
    this.onSubmit({freeText, category})
  }

  clearFilters() {
    this.freeText = "";
    this.category = "";
    this.searchDiscounts(this.freeText, this.category);
  }
}
