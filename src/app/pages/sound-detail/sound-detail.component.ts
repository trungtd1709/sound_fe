import { Component } from '@angular/core';
import { Button3DComponent } from '../../components/button-3-d/button-3d.component';
import { SoundCardGridComponent } from "../../components/sound-card-grid/sound-card-grid.component";

@Component({
  selector: 'app-sound-detail',
  imports: [Button3DComponent, SoundCardGridComponent],
  templateUrl: './sound-detail.component.html',
  styleUrl: './sound-detail.component.scss',
})
export class SoundDetailComponent {
  // Component logic can be added here

  onFavoriteClick() {
    // Handle favorite button click
    console.log('Added to favorites');
  }

  onDownloadClick() {
    // Handle download button click
    console.log('Downloading MP3');
  }

  onSocialShare(platform: string) {
    // Handle social media sharing
    console.log(`Sharing on ${platform}`);
  }

  onKeywordClick(keyword: string) {
    // Handle keyword click
    console.log(`Searching for: ${keyword}`);
  }
}
