import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/StoreService';
import { getUrlFor } from '../utility/endpoints';
import { attachAuthHeader } from '../utility/auth';
import * as http from 'superagent';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {

  constructor(private store: StoreService) {
    console.log(this.store.getDefaultState().questions)
  }
  readonly url = getUrlFor("tasks/mines")
  tasks = []


  ngOnInit() {
    attachAuthHeader(http.get(this.url))
      .end((err, res) => {
        const { body } = res;
        console.log("----------------------", body)
        this.tasks = body               
      });
  }
}
