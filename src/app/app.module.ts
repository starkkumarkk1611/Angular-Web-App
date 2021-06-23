import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SearchFilterPipe } from './search-filter.pipe';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule,BrowserAnimationsModule],
  declarations: [ AppComponent, AboutComponent, CourseComponent, HomeComponent, SearchFilterPipe,PopUpComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }