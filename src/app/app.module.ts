import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherAddComponent } from './weather-add/weather-add.component';
import { WeatherEditComponent } from './weather-edit/weather-edit.component';
import { WeatherDeleteComponent } from './weather-delete/weather-delete.component';

@NgModule({
    declarations: [
        AppComponent,
        WeatherListComponent,
        WeatherAddComponent,
        WeatherEditComponent,
        WeatherDeleteComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
