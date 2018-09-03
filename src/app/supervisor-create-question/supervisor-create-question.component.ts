import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supervisor-create-question',
  templateUrl: './supervisor-create-question.component.html',
  styleUrls: ['./supervisor-create-question.component.css']
})
export class SupervisorCreateQuestionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  createQuestion(kind) {
    if (kind == 1){
      //this.router.navigate(['/supervisor/questions/simple/create']);
      this.router.navigate(['/supervisor/questions/simple']);
    }
    else if (kind == 2){
      //this.router.navigate(['/supervisor/questions/complex/create']);
      this.router.navigate(['/supervisor/questions/complex']);
    }
  }

}
