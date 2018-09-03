import { getUrlFor, http } from '../utility/endpoints';
import { attachAuthHeader } from '../utility/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  readonly url = getUrlFor("users")  
  students = []
  constructor() { }

  ngOnInit() {
    attachAuthHeader(http.get(this.url))
    .end((err, res) => {
      const { body } = res;
      this.students = body
      console.log(body)
    });   
    }
}







