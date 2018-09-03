import { getRole } from './auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';


@Injectable()
export class AdminAuthGaurd implements CanActivate {
    constructor(private router: Router){}
    canActivate() {
        if (getRole() === "admin") {
            return true;
        }else{
            this.router.navigateByUrl('/signin')
            
        }
    }
}