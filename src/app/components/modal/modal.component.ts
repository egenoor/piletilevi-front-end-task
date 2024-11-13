import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  isVisible: boolean = false;
  @Input({required: true}) onClose!: () => void;
}
