import { getUrlFor, http } from '../utility/endpoints';
import { attachAuthHeader } from '../utility/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-simple-questions',
  templateUrl: './list-simple-questions.component.html',
  styleUrls: ['./list-simple-questions.component.css']
})
export class ListSimpleQuestionsComponent implements OnInit {

  readonly url = getUrlFor("questions")
  readonly complexQuestionUrl = `${this.url}?type=Simple`
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
