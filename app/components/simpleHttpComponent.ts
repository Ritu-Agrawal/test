import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'simple-http',
  template: `<h6>Basic Http request</h6>
              <button type="button" (click)="makeRequest()">Make Request</button>
              <div *ngIf="isLoading">loading.....</div>
              <pre>{{data | json }}</pre>`
})
export class SimpleHTTPComponent {
  data :object;
  isLoading : boolean;

  constructor(private http: Http){

  }
  makeRequest(): void{
    this.isLoading = true;
    this.http.request('assets/guests.json')
    .subscribe((res: Response) => {
      this.data = res.json();
      this.isLoading = false;
    })
  }
}
