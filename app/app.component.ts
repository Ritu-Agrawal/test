import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  template: `<h2>HTTP REQUEST</h2>
              <simple-http></simple-http>
              <hr>
              <youtube-search></youtube-search>`
})
export class AppComponent {
}
