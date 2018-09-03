import { getUrlFor, http } from '../utility/endpoints';
import { StoreService } from '../store/StoreService';
import { attachAuthHeader } from '../utility/auth';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-simple-question',
  templateUrl: './view-simple-question.component.html',
  styleUrls: ['./view-simple-question.component.css']
})
export class ViewSimpleQuestionComponent implements OnInit {

  readonly url = getUrlFor("questions")
  
  question = null
  
  constructor(private store: StoreService, private route: ActivatedRoute, private router: Router) { }   
    
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    let questionUrl = `${this.url}/${id}`
    attachAuthHeader(http.get(questionUrl))
    .end((err, res) => {
      const { body } = res;
      this.question = body
      console.log("------------------------------------------")
      console.log(body)
    });   
  }

  delete(){
    let id = this.route.snapshot.paramMap.get('id')
    let questionUrl = `${this.url}/${id}`
    attachAuthHeader(http.delete(questionUrl))
    .end((err, res) => {
      const { body } = res;
      this.question = body
      if(res.status === 200){
        this.router.navigateByUrl("/supervisor/questions/simple");
      }      
    });   
  }

}
