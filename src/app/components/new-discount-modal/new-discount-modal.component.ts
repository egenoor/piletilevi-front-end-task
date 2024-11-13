import { Component, Input } from '@angular/core'
import { Category } from '../../enums/category'

@Component({
  selector: 'app-new-discount-modal',
  templateUrl: './new-discount-modal.component.html',
  styleUrl: './new-discount-modal.component.scss'
})
export class NewDiscountModalComponent {
  categories = Object.values(Category);
  @Input({required: true}) onClose!: () => void;
}
