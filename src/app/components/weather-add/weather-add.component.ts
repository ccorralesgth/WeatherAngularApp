import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { WeatherForecast } from '../weather-forecast.model';

@Component({
  selector: 'app-weather-add',
  templateUrl: './weather-add.component.html',
  standalone: false,
  styleUrls: ['./weather-add.component.css']
})

export class WeatherAddComponent {
  forecast: WeatherForecast = {
    id: 0,
    date: '',
    temperatureC: 0,
    temperatureF: 0,
    summary: ''
  };

  constructor(private weatherService: WeatherService, private router: Router) { }

  addForecast(): void {
    this.weatherService.addWeatherForecast(this.forecast).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
