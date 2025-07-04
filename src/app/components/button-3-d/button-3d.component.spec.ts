import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button3DComponent } from './button-3d.component';

describe('Button3DComponent', () => {
  let component: Button3DComponent;
  let fixture: ComponentFixture<Button3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button3DComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
