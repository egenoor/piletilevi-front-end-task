import { Component } from '@angular/core'

@Component({
  selector: 'app-discount-view',
  templateUrl: './discount-view.component.html',
  styleUrl: './discount-view.component.scss'
})
export class DiscountViewComponent {
  isDiscountModalShown: boolean = false;

  closeDiscountModal() {
    this.isDiscountModalShown = false;
  }

  openDiscountModal() {
    this.isDiscountModalShown = true;
  }
}
