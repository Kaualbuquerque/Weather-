import { Component, OnChanges} from '@angular/core';

import { ApiCallsService } from './services/apicalls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';

  weatherData: any
  futureWeatherdata: any
  city: string = ''

  constructor(public apiCall: ApiCallsService) { }

  handleWeatherData(data: any) {
    console.log('Dados do tempo recebidos no AppComponent:', data);
    this.weatherData = data;
  }

  handleFutureWeatherData(data: any) {
    console.log('Dados do tempo recebidos no AppComponent:', data);
    this.futureWeatherdata = data;
    console.log(this.futureWeatherdata[0])
  }

  handleCity(city: string) {
    this.city = city
  }

  ngOnChanges(changes: any){
    if(changes.weatherData){
      
    }
  }
}
