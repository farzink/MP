import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StoreService } from '../store/StoreService';
import { ActivatedRoute } from '@angular/router';

import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import { style } from '@angular/animations';


@Component({
  selector: 'app-create-complex-question-validation',
  templateUrl: './create-complex-question-validation.component.html',
  styleUrls: ['create-complex-question-validation.component.scss']
})
export class CreateComplexQuestionValidationComponent implements OnInit {
  question = null
  c: any;
  @ViewChild('editor') editor: ElementRef
  @ViewChild('htmlContainer') htmlContainer: ElementRef
  constructor(private store: StoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let q = this.store.getDefaultState()
      .questions.filter(q => {
        if (q.id == id)
          return q
      })
    if (q.length > 0){
      this.question = q[0]
      this.bindHTML(this.question.html)
    }
  }
  ngAfterViewInit() {
    this.c = CodeMirror.fromTextArea(this.editor.nativeElement, {
      lineNumbers: true,
      extraKeys: {
        "Ctrl-Space": "autocomplete"
      },
      mode: "javascript",
      gutters: ["CodeMirror-lint-markers"],
      lint: true
    });
    this.c.on("change", (a, b) => {

    })
  }
  bindHTML(html){
    this.htmlContainer.nativeElement.innerHTML = html
  }
  apply(){
    this.bindHTML(this.question.html)
    eval(this.c.getValue())
  }
  setType(e, type){
    if(type === "click"){
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].innerHTML = "Click"
    }else if(type === "double-click"){
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].innerHTML = "Double-Click"
    }
    else if(type === "value-check"){
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].innerHTML = "Value-Check"
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].style.color = "#44ff1a"
    }
  }
}
