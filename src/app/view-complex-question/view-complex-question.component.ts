import { Component, OnInit } from '@angular/core';
import { getUrlFor, http } from '../utility/endpoints';
import { StoreService } from '../store/StoreService';
import { attachAuthHeader } from '../utility/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-complex-question',
  templateUrl: './view-complex-question.component.html',
  styleUrls: ['./view-complex-question.component.css']
})
export class ViewComplexQuestionComponent implements OnInit {
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
        this.router.navigateByUrl("/supervisor/questions/complex");
      }      
    });   
  }

}
