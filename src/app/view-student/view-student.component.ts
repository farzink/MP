import { getUrlFor } from '../utility/endpoints';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/StoreService';
import { attachAuthHeader } from '../utility/auth';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as http from 'superagent';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  readonly url = getUrlFor("users")
  student = null
  constructor(private store: StoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    let questionUrl = `${this.url}/${id}`
    attachAuthHeader(http.get(questionUrl))
    .end((err, res) => {
      const { body } = res;
      this.student= body      
      console.log(body)
    });   
  }

} 