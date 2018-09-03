import { getRole } from './auth';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate(){
        if (getRole() === "admin" || getRole() === "student") {
            return true;
        }else{
            this.router.navigateByUrl('/signin')
        }
    }
}