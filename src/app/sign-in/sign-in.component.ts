import { getUrlFor, http } from '../utility/endpoints';
import { setToken } from '../utility/auth';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as UIKit from 'uikit/dist/js/uikit.min.js'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  readonly url = getUrlFor("login")
  constructor(private router: Router) { }

  @ViewChild('username') username: ElementRef
  @ViewChild('password') password: ElementRef
  ngOnInit() {
  }

  login() {
    const username = this.username.nativeElement.value
    const password = this.password.nativeElement.value    
    http.post(this.url)
    .send({
      username: username,
      password: password
    })
    .end((err, res) => {
      console.log(res)      
      if(res.status === 200){
        setToken(res.text);
        UIKit.notification({ message: 'successful signin', status: 'success' })
        this.router.navigateByUrl("/")
      }else{
        UIKit.notification({ message: 'username/password wrong, please try again', status: 'danger' })
      }  
    }); 
  }
}
