import { Component, NgModule } from '@angular/core';
import { SoundCardComponent } from '../../components/sound-card/sound-card.component';
import { CommonModule } from '@angular/common';
import { Sound } from '../../models/sound.model';
import { SoundCardGridComponent } from '../../components/sound-card-grid/sound-card-grid.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, SoundCardGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchTerm: string = '';

  constructor() {}
}