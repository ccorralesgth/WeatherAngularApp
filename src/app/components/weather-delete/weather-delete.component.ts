
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-delete',
  templateUrl: './weather-delete.component.html',
  standalone: false,
  styleUrls: ['./weather-delete.component.css']
})

export class WeatherDeleteComponent implements OnInit {
  id: number = 0;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  deleteForecast(): void {
    this.weatherService.deleteWeatherForecast(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
