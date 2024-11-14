import { Component, Input } from '@angular/core'
import { Category } from '../../enums/category.enum'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input({required: true}) onChange!: (category: Category, event: Event) => void;
  @Input({required: true}) isChecked = false;
  @Input({required: true}) value!: Category;
  @Input({required: true}) name!: string;
}
