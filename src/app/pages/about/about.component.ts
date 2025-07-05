import { Component } from '@angular/core';
import { Button3DComponent } from '../../components/button-3-d/button-3d.component';

@Component({
  selector: 'app-about',
  imports: [Button3DComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  handleClick = () => {
    
  }
}
