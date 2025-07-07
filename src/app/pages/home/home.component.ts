import { Component, NgModule } from '@angular/core';
import { SoundCardComponent } from '../../components/sound-card-component/sound-card.component';
import { CommonModule } from '@angular/common';

interface SoundItem {
  id: string;
  title: string;
  color: string;
  audioUrl?: string;
}


@Component({
  selector: 'app-home',
  imports: [SoundCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchTerm: string = '';
  
  soundItems: SoundItem[] = [
    { id: 'vine-boom', title: 'VINE BOOM SOUND', color: '#9c27b0' },
    { id: 'tuco-get-out', title: 'Tuco: GET OUT', color: '#9c27b0' },
    { id: 'fart', title: 'Fart', color: '#424242' },
    { id: 'among-us', title: 'Among Us role reveal...', color: '#ff9800' },
    { id: 'anime-wow', title: 'Anime Wow', color: '#ff9800' },
    { id: 'rizz-sound', title: 'rizz sound effect', color: '#9c27b0' },
    { id: 'italian-brainrot', title: 'italian brainrot ringtone', color: '#4caf50' },
    { id: 'spongebob-fail', title: 'SpongeBob Fail', color: '#2196f3' },
    { id: 'apple-pay', title: 'Apple Pay', color: '#424242' },
    { id: 'baby-laughing', title: 'baby laughing meme', color: '#e91e63' },
    
    { id: 'sad-violin', title: 'Sad Violin (the meme...', color: '#cddc39' },
    { id: 'metal-pipe', title: 'Metal pipe clang', color: '#ff9800' },
    { id: 'flashbanggo', title: 'flashbanggo', color: '#f44336' },
    { id: 'bruh', title: 'BRUH', color: '#9e9e9e' },
    { id: 'buzzer', title: 'Buzzer', color: '#ff9800' },
    { id: 'scream-meme', title: 'Scream meme', color: '#9c27b0' },
    { id: 'syfm', title: 'Syfm', color: '#9c27b0' },
    { id: 'undertaker', title: 'The Undertaker...', color: '#424242' },
    { id: 'bone-crack', title: 'Bone Crack', color: '#e91e63' },
    { id: 'let-me-know', title: 'let me know', color: '#2196f3' }
  ];

  constructor() {}

  onSoundPlay(soundId: string): void {
    console.log('Playing sound:', soundId);
    // Implement sound playing logic here
  }

  onSoundLike(soundId: string): void {
    console.log('Liked sound:', soundId);
    // Implement like functionality here
  }

  onSoundShare(soundId: string): void {
    console.log('Shared sound:', soundId);
    // Implement share functionality here
  }

  onSoundDownload(soundId: string): void {
    console.log('Downloaded sound:', soundId);
    // Implement download functionality here
  }
}