import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router} from '@angular/router';
import {AuthStore} from '../services/auth.store'; 

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})


export class HomeComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private router:Router,private auth :AuthStore) { }

onClickSubmit(data) {
    
  this.auth.login(data.email,data.password)
    .subscribe(
      () => {
        this.router.navigate(['/course']);
      },
      err => {
        alert("Login failed!");
      }
    );
  
 }

}


