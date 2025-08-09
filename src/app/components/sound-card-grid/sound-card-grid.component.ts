import { Component } from '@angular/core';
import { SoundCardComponent } from '../sound-card/sound-card.component';
import { Sound } from '../../models/sound.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sound-card-grid',
  imports: [SoundCardComponent, CommonModule],
  templateUrl: './sound-card-grid.component.html',
  styleUrl: './sound-card-grid.component.scss'
})
export class SoundCardGridComponent {
  soundItems: Sound[] = [
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
}
