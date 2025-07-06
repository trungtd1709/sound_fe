import { Component } from '@angular/core';
import { SoundCardComponent } from '../../components/sound-card-component/sound-card.component';

@Component({
  selector: 'app-home',
  imports: [SoundCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
