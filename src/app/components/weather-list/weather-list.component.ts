import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherForecast } from '../weather-forecast.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  standalone: false,
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  weatherForecasts: WeatherForecast[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherForecasts().subscribe(data => {
      this.weatherForecasts = data;
    });
  }

  deleteForecast(id: number): void {
    this.weatherService.deleteWeatherForecast(id).subscribe(() => {
      this.weatherForecasts = this.weatherForecasts.filter(f => f.id !== id);
    });
  }

  //implement editForecast
  editForecast(id: number): void {
    //navigate to the edit page

  }

}
