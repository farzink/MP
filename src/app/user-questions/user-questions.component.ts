import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/StoreService';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {

  constructor(private store: StoreService) {
    console.log(this.store.getDefaultState().questions)
   }

  ngOnInit() {
  }
  getQuestions(){   
    return this.store.getDefaultState().questions;
  }
}
