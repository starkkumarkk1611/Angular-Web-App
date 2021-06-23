import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {AboutComponent} from '../about/about.component';
import {Observable} from 'rxjs';


@Injectable()
export class ConfirmExitGuard implements CanDeactivate<AboutComponent> {

    canDeactivate(component: AboutComponent,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): boolean  {

        return component.confirmExit();

    }

}
