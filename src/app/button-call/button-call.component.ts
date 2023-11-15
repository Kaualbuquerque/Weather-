import { Component } from '@angular/core';

import { ApiCallsService } from '../services/apicalls.service';

@Component({
  selector: 'app-button-call',
  templateUrl: './button-call.component.html',
  styleUrls: ['./button-call.component.css']
})
export class ButtonCallComponent {

  constructor(public apiCall: ApiCallsService){
    
  }

}
