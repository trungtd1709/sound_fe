import { Component, NgModule } from '@angular/core';
import { SoundCardComponent } from '../../components/sound-card/sound-card.component';
import { CommonModule } from '@angular/common';
import { Sound } from '../../models/sound.model';
import { SoundCardGridComponent } from '../../components/sound-card-grid/sound-card-grid.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, SoundCardGridComponent, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 80; // Your total data count
  totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

  // Your data
  allData = Array.from({ length: this.totalItems }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`
  }));

  // Current page data
  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.allData.slice(start, end);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    // Here you might also want to scroll to top or fetch new data
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor() {}
}