import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {


  }

  getWeather(cityName: string, countryCode: string) {

    this.weatherService.getWeather(cityName, countryCode)
      .subscribe(
        resp => {
          console.log(resp);
          this.weather = resp;
        },
        err => {
          return console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {

    if (cityName.value && countryCode.value  ) {
      this.getWeather(cityName.value, countryCode.value);
      console.log(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please insert some values')
    }

    cityName.focus();
    return false; // para que no se refresque 

  }
}
