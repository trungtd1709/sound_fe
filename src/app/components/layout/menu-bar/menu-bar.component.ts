import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  
  onLogin() {
    console.log('Login clicked');
  }
  
  onSignUp() {
    console.log('Sign up clicked');
  }
  
  onUpload() {
    console.log('Upload clicked');
  }
}