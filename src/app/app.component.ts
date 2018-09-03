import { clearToken, getRole, isSignedIn, getUsername } from './utility/auth';
import { Router } from '@angular/router';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = ""

  constructor(private router: Router){
    this.getUsername()
  }
  logout(){
    clearToken()
    this.getUsername()
    this.router.navigateByUrl("/")
  }
  isAdmin() {
    return getRole() === "admin" ? true : false 
  }
  isStudent() {
    return getRole() === "student" ? true : false 
  }
  isSignedIn() {
    return isSignedIn()
  }
  getUsername() {
    this.username = getUsername()
    return this.username
  }
}
