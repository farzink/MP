import { getUrlFor } from '../utility/endpoints';
import { attachAuthHeader } from '../utility/auth';
import { Component, OnInit } from '@angular/core';
import * as http from 'superagent';

@Component({
  selector: 'app-student-history',
  templateUrl: './student-history.component.html',
  styleUrls: ['./student-history.component.css']
})
export class StudentHistoryComponent implements OnInit {

  readonly url = getUrlFor("tasks/done")
  tasks = []
  constructor() { }

  ngOnInit() {
    attachAuthHeader(http.get(this.url))
    .end((err, res) => {
      const { body } = res;      
      this.tasks = body               
    });
  }

}




