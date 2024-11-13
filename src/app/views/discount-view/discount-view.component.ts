import { Component } from '@angular/core'
import { Filters } from '../../common/types'

@Component({
  selector: 'app-discount-view',
  templateUrl: './discount-view.component.html',
  styleUrl: './discount-view.component.scss'
})
export class DiscountViewComponent {
  isDiscountModalShown: boolean = false;
  filters: Filters = {freeText: "", category: ""};

  handleFiltersSubmit(filters: Filters) {
    this.filters = filters;
  }

  closeDiscountModal() {
    this.isDiscountModalShown = false;
  }

  openDiscountModal() {
    this.isDiscountModalShown = true;
  }
}
