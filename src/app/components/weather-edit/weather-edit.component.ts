import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { WeatherForecast } from '../weather-forecast.model';

@Component({
  selector: 'app-weather-edit',
  templateUrl: './weather-edit.component.html',
  standalone: false,
  styleUrls: ['./weather-edit.component.css']
})

export class WeatherEditComponent implements OnInit {
  forecast: WeatherForecast = {
    id: 0,
    date: '',
    temperatureC: 0,
    temperatureF: 0,
    summary: ''
  };

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.weatherService.getWeatherForecast(id).subscribe(data => {
      this.forecast = data;
    });
  }

  updateForecast(): void {
    this.weatherService.updateWeatherForecast(this.forecast.id, this.forecast).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
