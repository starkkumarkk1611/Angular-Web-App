import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CourseComponent} from "./course/course.component";
import { PopUpComponent } from './pop-up/pop-up.component';
import {CanLoadAuthGuard} from './services/can-load-auth.guard';
import {CustomPreloadingStrategy} from './services/custom-preloading.strategy';
import { AuthGuard } from './services/auth.guard';
import { ConfirmExitGuard } from './services/confirm-exit.guard';
const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "course/:id",
        component: AboutComponent,
        canActivate : [AuthGuard],
        canDeactivate : [ConfirmExitGuard]

    },
    {
        path: "course/edit/:id",
        component: PopUpComponent,
        canActivate : [AuthGuard],

    },
    {
        path: 'course',
        component: CourseComponent,
        canActivate : [AuthGuard]
        //,
       // children:[{path:':id', component:AboutComponent}]
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers : [AuthGuard,ConfirmExitGuard]
})
export class AppRoutingModule { }
