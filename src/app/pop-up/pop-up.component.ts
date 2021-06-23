import { Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TOURS } from '../../../server/db-data';
import { AuthStore } from '../services/auth.store';

@Component({
  selector: 'app-root',
  templateUrl: './pop-up.component.html',
  styleUrls: [ './pop-up.component.css' ]
})



export class PopUpComponent {

  id : string;
  tour:any;
  x=0;
  tourchange : any;
  postId;
  errorMessage;
    
 onClickSubmit(data) {
    const body=data;
    this.http.put<any>('http://localhost:9000/api/tours/'+ this.id,body)
    .subscribe({
      next: data => {
          this.postId = data.id;
          alert("Saved Successfully");
          this.ngOnInit();
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  });
 }


  constructor(private activatedRoute: ActivatedRoute,private http : HttpClient, private auth :AuthStore) {
  }
 
  ngOnInit() {

   
    this.activatedRoute.params.subscribe(paramsId => {
        this.id = paramsId.id;
       
    });
    this.http.get('http://localhost:9000/api/tours/'+ this.id)
    .subscribe(Response => {
  
      // If response comes hideloader() function is called
      // to hide that loader 
      if(Response){  
        hideloader();
      }
     
      this.tour=Response;
      this.tourchange = JSON.parse(JSON.stringify(this.tour));
      console.log(this.tourchange)
      
    
    });
    function hideloader(){
      document.getElementById('loading').style.display = 'none'; 
      }
   
  }
  logout(){
    this.auth.logout();
  }

}









