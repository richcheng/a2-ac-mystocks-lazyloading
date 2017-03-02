import {Injectable, Injector} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import { AuthService } from './auth.service';

import { ToastrService  } from 'ngx-toastr';
import { BaseComponent } from '../base.component';
import { toastConfig } from '../toastrConfig';

@Injectable()
export class AuthGuard extends BaseComponent implements CanActivate{
    constructor(
        private injector: Injector,
        private authService: AuthService, 
        private router: Router){
            super(injector);
    }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authService.authenticated()){
            console.log('AUTH GUARD PASSED');
            return true;
        } else {
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['/']).then(() : void => { this.toastrService.info('BLOCKED BY AUTH GUARD, redirect to home page', 'AUTH GUARD', toastConfig); });
            return false;
        }
    }
}