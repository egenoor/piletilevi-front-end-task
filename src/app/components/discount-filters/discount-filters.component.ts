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
  selectedCategories: Category[] = [];
  allCategories = Object.values(Category);
  isCategoriesDropdownOpen: boolean = false;
  @Input({required: true}) onSubmit!: (filters: Filters) => void;
  
  searchDiscounts(freeText: string, categories: Category[]) {
    this.onSubmit({freeText, categories})
  }

  clearFilters() {
    this.freeText = "";
    this.selectedCategories = [];
    this.searchDiscounts(this.freeText, this.selectedCategories);
  }
  
  openCategoriesDropdown() {
    this.isCategoriesDropdownOpen = true
  }

  closeCategoriesDropdown() {
    this.isCategoriesDropdownOpen = false;
  }

  setCategory(category: Category, event: Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.selectedCategories.push(category);
    } else {
      const categoryIndex = this.selectedCategories.indexOf(category);
      if (categoryIndex !== -1) {
        this.selectedCategories.splice(categoryIndex, 1)
      }
    }
  }
}
