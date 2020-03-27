import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '9706cd9f00edd0ca606281dac3644908';
  URI: string = '';

  constructor( private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }
  getWeather(cityName: string, countryCode: string) {
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);

  }
}