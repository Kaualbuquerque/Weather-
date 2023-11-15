import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  city: string = 'Recife'

  apiResp: any
  weatherData: any = {
    temp: '',
    feelsLike: '',
    humidity: '',
    windSpeed: '',
  }

  weatherKey: string = 'a2948e3790a370506fa9ace267bf1883'
  urlWeather: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.weatherKey}`


  constructor(private http: HttpClient) { }


  getWeather() {
    try {
      this.http.get(this.urlWeather).subscribe((data) => {
        this.apiResp = data
        this.weatherData.temp = this.apiResp.main.temp
        this.weatherData.feelsLike = this.apiResp.main.feels_like
        this.weatherData.humidity = this.apiResp.main.humidity
        this.weatherData.windSpeed = this.apiResp.wind.speed
      })

      return console.log(this.weatherData) 

    } catch (error) {
      console.log("Falha ao requisitar os dados do clima")
    }
  }
}
