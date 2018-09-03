import { getUrlFor, http } from '../utility/endpoints';
import { attachAuthHeader } from '../utility/auth';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as UIKit from 'uikit/dist/js/uikit.min.js'
import { ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supervisor-question-assign',
  templateUrl: './supervisor-question-assign.component.html',
  styleUrls: ['./supervisor-question-assign.component.css']
})
export class SupervisorQuestionAssignComponent implements OnInit {
  readonly url = getUrlFor("users")
  readonly assignmentUrl = getUrlFor("tasks/assignments")
  users = []
  constructor(private route: ActivatedRoute, private router: Router) { }


  @ViewChild("taskTitle") taskTitle: ElementRef
  @ViewChild("taskDescription") taskDescription: ElementRef
  @ViewChild("taskDeadline") taskDeadline: ElementRef

  ngOnInit() {
    attachAuthHeader(http.get(this.url))
      .end((err, res) => {
        const { body } = res;
        this.users = body
        console.log(body)
      });

  }

  enroll(studentId) {
    let student = this.users.filter(student => student.id === studentId);
    if (student.length > 0) {
      if (student[0].enroll) {
        student[0].enroll = !student[0].enroll
      } else {
        student[0].enroll = true
      }
    }
  }

  assign() {
    if (this.fieldCheck()) {
      let id = this.route.snapshot.paramMap.get('id')
      let eligibles = this.users.filter(user => user.enroll)
        .map(student => {
          return {
            studentId: student.id,
            questionId: id
          }
        })
      if (eligibles.length !== 0) {
        const model = {
          "deadline": this.taskDeadline.nativeElement.value.split("-").reverse().join("-"),
          "status": false,
          "title": this.taskTitle.nativeElement.value,
          "description": this.taskDescription.nativeElement.value,
          "assignments": eligibles
        }
        console.log(model)
        attachAuthHeader(http.post(this.assignmentUrl))
          .send(model)
          .end((err, res) => {
            if (res.status) {
              UIKit.notification({ message: 'successfully assigned', status: 'success' })
              this.router.navigateByUrl("/");
            }
          });
      } else {
        alert("no student is selected")
      }
    } else {
      UIKit.notification({ message: 'title, description, and deadline should be provided', status: 'danger' })
    }
  }

  fieldCheck() {
    if (this.taskDeadline.nativeElement.value == "" || this.taskTitle.nativeElement.value == "" || this.taskDescription.nativeElement.value == "")
      return false
    return true
  }
}







    }





