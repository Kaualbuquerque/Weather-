import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiCallsService {
  weatherKey: string = 'a2948e3790a370506fa9ace267bf1883'

  constructor(private http: HttpClient) { }
  getWeather(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.weatherKey}`);
  }

}