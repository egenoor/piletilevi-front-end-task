import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  currentPage = 1;
  @Input({required: true}) pageSize!: number;
  @Input({required: true}) totalItems!: number;
  @Output() pageChanged = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  createArrayOfSize(size: number) {
    return [...Array(size + 1).keys()].slice(1) // [1, 2, 3, 4, ...]
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(page);
    }
  }
}
