import { Component, Input } from '@angular/core'
import { Category } from '../../enums/category'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() onChange!: (category: Category, event: Event) => void;
  @Input() value!: Category;
  @Input() name!: string;
}
