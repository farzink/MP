import { getUrlFor } from '../utility/endpoints';
import { attachAuthHeader } from '../utility/auth';
import { Component, OnInit } from '@angular/core';
import * as http from 'superagent';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  readonly url = getUrlFor("tasks/mines") 
  tasks = []
  constructor() { }

  ngOnInit() {
    attachAuthHeader(http.get(this.url))
    .end((err, res) => {
      const { body } = res;
      this.tasks = body
      console.log(body)
    });   
    }

  }



 
  

  