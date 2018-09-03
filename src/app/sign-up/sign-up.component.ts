import { getUrlFor } from '../utility/endpoints';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as http from 'superagent';
import * as UIKit from 'uikit/dist/js/uikit.min.js'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  readonly url = getUrlFor("users/sign-up")
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
      if(res.status === 201){
        //setToken(res.text);
        UIKit.notification({ message: 'your account is created', status: 'success' })
        this.router.navigateByUrl("/signin")
      }else{
        UIKit.notification({ message: 'something has gone wrong, please try again!', status: 'danger' })
      }
    }); 
  }

}



