import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() maxVisiblePages: number = 5;
  
  @Output() pageChange = new EventEmitter<number>();

  visiblePages: number[] = [];
  showFirstPage = false;
  showLastPage = false;
  showFirstEllipsis = false;
  showLastEllipsis = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage'] || changes['totalPages'] || changes['maxVisiblePages']) {
      this.updateVisiblePages();
    }
  }

  private updateVisiblePages(): void {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxVisible = this.maxVisiblePages;

    if (totalPages <= maxVisible) {
      // Show all pages
      this.visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);
      this.showFirstPage = false;
      this.showLastPage = false;
      this.showFirstEllipsis = false;
      this.showLastEllipsis = false;
    } else {
      // Calculate visible pages with ellipsis
      const halfVisible = Math.floor(maxVisible / 2);
      let startPage = Math.max(currentPage - halfVisible, 1);
      let endPage = Math.min(startPage + maxVisible - 1, totalPages);

      // Adjust start page if we're near the end
      if (endPage - startPage + 1 < maxVisible) {
        startPage = Math.max(endPage - maxVisible + 1, 1);
      }

      this.visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

      // Determine what to show
      this.showFirstPage = startPage > 1;
      this.showLastPage = endPage < totalPages;
      this.showFirstEllipsis = startPage > 2;
      this.showLastEllipsis = endPage < totalPages - 1;

      // Remove first/last page from visible pages if they're shown separately
      if (this.showFirstPage) {
        this.visiblePages = this.visiblePages.filter(page => page !== 1);
      }
      if (this.showLastPage) {
        this.visiblePages = this.visiblePages.filter(page => page !== totalPages);
      }
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }
}