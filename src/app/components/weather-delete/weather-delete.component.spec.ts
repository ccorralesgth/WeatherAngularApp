import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDeleteComponent } from './weather-delete.component';

describe('WeatherDeleteComponent', () => {
  let component: WeatherDeleteComponent;
  let fixture: ComponentFixture<WeatherDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
