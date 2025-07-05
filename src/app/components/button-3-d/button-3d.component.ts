import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-3d',
  templateUrl: './button-3d.component.html',
  styleUrls: ['./button-3d.component.scss']
})
export class Button3DComponent implements OnInit {
  @Input() disabled = false;
  @Input() color?: string; // Optional: force a specific color
  @Input() size: 'small' | 'medium' | 'large' | 'xl' = 'medium'; // Size variants
  @Output() buttonClick = new EventEmitter<void>();

  selectedColor = 'blue';
  isPressed = false;
  
  private colors = ['blue', 'red', 'green', 'orange', 'purple'];

  ngOnInit() {
    this.selectRandomColor();
  }

  private selectRandomColor() {
    if (!this.color) {
      const randomIndex = Math.floor(Math.random() * this.colors.length);
      this.selectedColor = this.colors[randomIndex];
    } else {
      this.selectedColor = this.color;
    }
  }

  onMouseDown() {
    if (!this.disabled) {
      this.isPressed = true;
    }
  }

  onMouseUp() {
    this.isPressed = false;
  }

  onClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }

  get buttonClasses(): string {
    return `btn-3d btn-3d--${this.selectedColor} btn-3d--${this.size}`;
  }
}