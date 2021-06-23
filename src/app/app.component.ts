import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthStore } from './services/auth.store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

}


