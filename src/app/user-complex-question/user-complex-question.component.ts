import { attachAuthHeader } from '../utility/auth';
import { Component, OnInit, AfterViewInit, HostBinding, ElementRef } from '@angular/core';
import * as http from 'superagent';
import { getUrlFor } from '../utility/endpoints';

import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/mode/javascript/javascript'
import { ViewChild } from '@angular/core';
import * as UIKit from 'uikit/dist/js/uikit.min.js'
import { slideInDownAnimation } from '../animations';
import { StoreService } from '../store/StoreService';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-complex-question',
  templateUrl: './user-complex-question.component.html',
  styleUrls: ['./user-complex-question.component.scss'],
  animations: [slideInDownAnimation],
  encapsulation: ViewEncapsulation.None
})
export class UserComplexQuestionComponent implements OnInit, AfterViewInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  theme: string = "default"
  c: any;
  @ViewChild('editor') editor: ElementRef
  @ViewChild('htmlContainer') htmlContainer: ElementRef


  readonly taskUrl = getUrlFor("tasks")
  readonly questionUrl = getUrlFor("questions")
  task = null
  question = null







  constructor(private store: StoreService, private route: ActivatedRoute, private router: Router) {

  }
  ngAfterViewInit() {
    this.c = CodeMirror.fromTextArea(this.editor.nativeElement, {
      lineNumbers: true,
      extraKeys: { "Ctrl-Space": "autocomplete" },
      mode: { name: "javascript", globalVars: true },
      styleActiveLine: true,
      matchBrackets: true
    });

  }

  bindHTML(html) {
    this.htmlContainer.nativeElement.innerHTML = html
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    let taskUrl = `${this.taskUrl}/${id}`
    attachAuthHeader(http.get(taskUrl))
      .end((err, res) => {
        const { body } = res;        
        this.task = body
        //this.c.setValue(body.body)
        let questionUrl = `${this.questionUrl}/${body.questionId}`
        let that = this
        attachAuthHeader(http.get(questionUrl))
          .end((err, res) => {
            const { body } = res;            
            that.question = body            
            that.bindHTML(that.question.body)
          });


      });
  }
  themeButtonClicked() {
    if (this.c.getOption("theme") === "default")
      this.c.setOption("theme", "ambiance")
    else
      this.c.setOption("theme", "default")
  }
  valueButtonClicked() {
    eval(this.c.getValue())
  }

  submit() {

    const result = this.c.getValue();

    if (result == "") {
      UIKit.notification({ message: 'there is no code to submit', status: 'danger' })
    } else {
      const model = {
        questionId: this.question.id,
        content: result
      }


      
      attachAuthHeader(http.post(getUrlFor(`tasks/complex/${this.task.id}`)))    
      .send(model)      
      .end((err, res) => {
        if(res.status === 200){
          UIKit.notification({ message: 'successfully submitted', status: 'success' })
          this.router.navigate(['/student/tasks']);
        }
      })
  }
}
}



