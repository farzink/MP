import { getUrlFor, http } from '../utility/endpoints';
import { attachAuthHeader } from '../utility/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-question-assignment',
  templateUrl: './supervisor-question-assignment.component.html',
  styleUrls: ['./supervisor-question-assignment.component.css']
})
export class SupervisorQuestionAssignmentComponent implements OnInit {
  readonly url = getUrlFor("questions")
  questions = []
  constructor() { }

  ngOnInit() {
    attachAuthHeader(http.get(this.url))
    .end((err, res) => {
      const { body } = res;
      this.questions = body
      console.log(body)
    }); 
  }

}


