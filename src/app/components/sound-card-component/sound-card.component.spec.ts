import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundCardComponentComponent } from './sound-card.component';

describe('SoundCardComponentComponent', () => {
  let component: SoundCardComponentComponent;
  let fixture: ComponentFixture<SoundCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
