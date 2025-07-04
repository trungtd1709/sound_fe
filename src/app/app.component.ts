import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { Button3DComponent } from './components/button-3-d/button-3d.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, Button3DComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'sound_fe';
  handleClick(buttonName: string) {
    console.log(`${buttonName} clicked!`);
    alert(`You clicked: ${buttonName}`);
  }
}
