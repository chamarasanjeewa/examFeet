import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from './sharedService';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private sharedService: SharedService,public router:Router) {}

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    debugger;
     var userInfo= JSON.parse(sessionStorage.getItem('userInfo'));
    if (userInfo!=undefined && userInfo!=null) {
      return  true;
    }
    else {
          this.router.navigate(['/login']);
          return false;
    }
     
   //this.sharedService.sessionInfo!=undefined
   // return this.authService.isLoggedIn();
  }
}