import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  currentPage: number = 1;
  @Input() pageSize!: number;
  @Input() totalItems!: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  createArrayOfSize(size: number) {
    return new Array(size).fill(0)
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(page);
    }
  }
}
