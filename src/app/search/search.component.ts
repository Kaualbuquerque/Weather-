import { Component, Output, EventEmitter } from '@angular/core';

import { ApiCallsService } from '../services/apicalls.service';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() sendData = new EventEmitter
  @Output() sendCity = new EventEmitter
  city: string = '';

  weatherData: any
  constructor(private apiCall: ApiCallsService) { }

  getWeather() {
    if (this.city != '') {
      try {
        this.apiCall.getWeather(this.city)
          .subscribe((data) => {
            this.weatherData = data
            this.sendData.emit(this.weatherData)
            this.sendCity.emit(this.city)
          });
      } catch (error) {
        console.log("Falha ao requisitar os dados")
      }
    } if (this.city == '') {
      console.log("Digite o nome de uma cidade para buscar os dados")
    }
  }
}

