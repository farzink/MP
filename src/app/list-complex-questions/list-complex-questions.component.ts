import { http, getUrlFor } from '../utility/endpoints';
import { attachAuthHeader } from '../utility/auth';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-list-complex-questions',
  templateUrl: './list-complex-questions.component.html',
  styleUrls: ['./list-complex-questions.component.css']
})
export class ListComplexQuestionsComponent implements OnInit {

  readonly url = getUrlFor("questions")
  readonly complexQuestionUrl = `${this.url}?type=Complex`
  questions = []
  constructor() { }

  ngOnInit() {
    attachAuthHeader(http.get(this.complexQuestionUrl))
    .end((err, res) => {
      const { body } = res;
      this.questions = body
      console.log(body)
    });   
    }
    
  }


