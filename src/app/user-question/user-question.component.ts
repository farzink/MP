import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostBinding } from '@angular/core';
//var CodeMirror = require('codemirror')

import * as CodeMirror from 'codemirror/lib/codemirror'
//import 'codemirror/addon/hint/show-hint.css'



//require("codemirror/addon/hint/show-hint.js")
//require("codemirror/addon/hint/javascript-hint.js")

//var markdown = require("codemirror/mode/markdown/markdown.js")
//var javascript = require('codemirror/mode/javascript/javascript')
//import * as javascript from 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/javascript/javascript'


//import 'codemirror/theme/ambiance.css'
import { slideInDownAnimation } from '../animations';
import { getUrlFor, http } from '../utility/endpoints';
import { StoreService } from '../store/StoreService';
import { attachAuthHeader } from '../utility/auth';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import * as UIKit from 'uikit/dist/js/uikit.min.js'


@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.css'],
  animations: [slideInDownAnimation]
})
export class UserQuestionComponent implements OnInit, AfterViewInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  theme: string = "default"
  c: any;
  @ViewChild('editor') editor: ElementRef


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


      
      attachAuthHeader(http.post(getUrlFor(`tasks/simple/${this.task.id}`)))    
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



