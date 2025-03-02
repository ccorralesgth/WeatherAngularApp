import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherEditComponent } from './weather-edit.component';

describe('WeatherEditComponent', () => {
  let component: WeatherEditComponent;
  let fixture: ComponentFixture<WeatherEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
