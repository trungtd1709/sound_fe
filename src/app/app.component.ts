import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/layout/menu-bar/menu-bar.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, FooterComponent],
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
