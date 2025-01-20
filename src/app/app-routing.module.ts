import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherAddComponent } from './weather-add/weather-add.component';
import { WeatherEditComponent } from './weather-edit/weather-edit.component';
import { WeatherDeleteComponent } from './weather-delete/weather-delete.component';

const routes: Routes = [
  { path: '', component: WeatherListComponent },
  { path: 'add', component: WeatherAddComponent },
  { path: 'edit/:id', component: WeatherEditComponent },
  { path: 'delete/:id', component: WeatherDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
