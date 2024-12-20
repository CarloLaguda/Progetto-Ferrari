import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingComponent } from './racing.component';

describe('RacingComponent', () => {
  let component: RacingComponent;
  let fixture: ComponentFixture<RacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
