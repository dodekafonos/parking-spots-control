import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpotComponent } from './register-spot.component';

describe('RegisterSpotComponent', () => {
  let component: RegisterSpotComponent;
  let fixture: ComponentFixture<RegisterSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSpotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
