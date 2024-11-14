import { Component } from '@angular/core'
import { Filters } from '../../common/interfaces/filters.interface'


@Component({
  selector: 'app-discount-view',
  templateUrl: './discount-view.component.html'
})
export class DiscountViewComponent {
  isDiscountModalShown = false;
  filters: Filters = {freeText: "", categories: []};

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
