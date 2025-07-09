import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundCardGridComponent } from './sound-card-grid.component';

describe('SoundCardGridComponent', () => {
  let component: SoundCardGridComponent;
  let fixture: ComponentFixture<SoundCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundCardGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
