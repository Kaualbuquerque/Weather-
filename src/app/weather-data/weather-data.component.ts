import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnChanges {

  @Input() city: string = ''
  @Input() icon: string = ''
  @Input() temp: any = {
    currently: '',
    min: '',
    max: ''
  }

  @Input() weatherData: any

  weatherConditions: string = ''

  ngOnChanges(changes: any) {
    this.temp.currently = String((Number(this.weatherData.main.temp) - 273).toFixed(0))
    this.temp.min = String((Number(this.weatherData.main.temp_min) - 273).toFixed(0))
    this.temp.max = String((Number(this.weatherData.main.temp_max) - 273).toFixed(0))


    this.weatherConditions = this.weatherData.weather[0].icon
    if (changes.city) {
      switch (this.weatherConditions) {
        case '01d':
        case '01n':
          this.icon = '../../assets/images/Ensolarado.png';
          break;
        case '02d':
        case '02n':
          this.icon = '../../assets/images/ceu-limpo.png';
          break;
        case '03d':
        case '03n':
        case '04d':
        case '04n':
          this.icon = '../../assets/images/nuvens.png';
          break;
        case '09d':
        case '09n':
          this.icon = '../../assets/images/chuva (1).png';
          break;
        case '10d':
        case '10n':
          this.icon = '../../assets/images/chuva (2).png';
          break;
        case '11d':
        case '11n':
          this.icon = '../../assets/images/tempestade (1).png';
          break;
        default:
          this.icon = 'Condição meteorológica desconhecida';
          break;
      }
    }

  }
}

