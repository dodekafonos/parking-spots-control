import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpotsComponent } from './list-spots.component';

describe('ListSpotsComponent', () => {
  let component: ListSpotsComponent;
  let fixture: ComponentFixture<ListSpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSpotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
