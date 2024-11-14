import { Component, Input } from '@angular/core'
import { Category } from '../../enums/category'

@Component({
  selector: 'app-new-discount-modal',
  templateUrl: './new-discount-modal.component.html',
  styleUrl: './new-discount-modal.component.scss'
})
export class NewDiscountModalComponent {
  allCategories = Object.values(Category);
  selectedCategories: Category[] = [];
  isCategoriesDropdownOpen: boolean = false;
  @Input({required: true}) onClose!: () => void;

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
