import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button3DComponent } from '../button-3-d/button-3d.component';
import { NavigationService } from '../../core/navigation/navigation.service';

@Component({
  selector: 'app-sound-card',
  imports: [Button3DComponent],
  templateUrl: './sound-card.component.html',
  styleUrl: './sound-card.component.scss',
})
export class SoundCardComponent {
  @Input() title?: string;
  @Input() soundUrl?: string;

  @Output() onSoundPlay = new EventEmitter<string>();
  @Output() onSoundLike = new EventEmitter<string>();
  @Output() onSoundShare = new EventEmitter<string>();
  @Output() onSoundDownload = new EventEmitter<string>();

  isLiked = false;
  showSoundNotification = false;
  clickCount = 0;

  constructor(private navigation: NavigationService) {}

  playSound() {
    this.clickCount++;

    // Show sound notification
    this.showSoundNotification = true;
    setTimeout(() => {
      this.showSoundNotification = false;
    }, 2000);

    // In a real implementation, you would play the sound here
    // this.audioService.playSound();
    console.log('🔊 Playing sound! Click count:', this.clickCount);
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    console.log('Liked:', this.isLiked);
  }

  shareButton() {
    if (navigator.share) {
      navigator.share({
        title: 'Sound Card Button',
        text: 'Check out this awesome sound button!',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  }

  downloadSound() {
    // In a real implementation, this would download the sound file
    console.log('Download sound file');
    alert('Download functionality would be implemented here!');
  }

  viewSoundDetail() {
    // alert('dqwdwqqdw');
    this.navigation.navigateSoundDetail("1");
  }
}
