import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthStore } from '../services/auth.store';




@Component({
  selector: 'app-root',
  templateUrl: './course.component.html',
  styleUrls: [ './course.component.css' ]
})

export class CourseComponent implements OnInit {
  cat = "BEGINNER";
  tour: any;
  tours = [];
 

  constructor(private http : HttpClient, private auth :AuthStore){}
  

  ngOnInit(): void {
    this.http.get('http://localhost:9000/api/tours')
    .subscribe(Response => {
  
      // If response comes hideloader() function is called
      // to hide that loader 
      if(Response){  
        hideloader();
      }
      this.tour=Response;
      console.log(this.auth.isLoggedIn$);
      this.tours = this.tour.payload;
      
    });

  
    function hideloader(){
      document.getElementById('loading').style.display = 'none';}
    
  }

  logout(){
    this.auth.logout();
    
  }
  
 
}


