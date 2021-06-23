import { Component, VERSION } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthStore } from '../services/auth.store';

@Component({
  selector: 'app-root',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css' ]
})





export class AboutComponent  {
  name = 'Angular ' + VERSION.major;
  id : string;
  tour:any;
  x=0;


  constructor(private activatedRoute: ActivatedRoute,private http : HttpClient,private auth : AuthStore) {
  }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
        this.id = paramsId.id;
        console.log(this.id);
    });
    this.http.get('http://localhost:9000/api/tours/'+ this.id)
    .subscribe(Response => {
  
      // If response comes hideloader() function is called
      // to hide that loader 
      if(Response){  
        hideloader();
      }
      console.log(Response);
      this.tour=Response;
      this.tour.locations.forEach((item)=>{
        this.x=this.x+1;
        item.sl=this.x;
        });
      console.log(this.tour.description);
   
      
    });
    function hideloader(){
      document.getElementById('loading').style.display = 'none';}
    
    
  }
  
  confirmExit() {
    return confirm(`Are you sure you want to exit ${this.tour.description}?`)
}
logout(){
  this.auth.logout();
}


}





