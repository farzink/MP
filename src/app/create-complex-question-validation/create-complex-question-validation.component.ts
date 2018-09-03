import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StoreService } from '../store/StoreService';
import { ActivatedRoute } from '@angular/router';

import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import { attachAuthHeader } from '../utility/auth';
import { style } from '@angular/animations';
import * as http from 'superagent';
import { getUrlFor } from '../utility/endpoints';
import * as UIKit from 'uikit/dist/js/uikit.min.js'
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-complex-question-validation',
  templateUrl: './create-complex-question-validation.component.html',
  styleUrls: ['create-complex-question-validation.component.scss']
})
export class CreateComplexQuestionValidationComponent implements OnInit {
  question = null
  c: any;
  testable = false
  @ViewChild('editor') editor: ElementRef
  @ViewChild('htmlContainer') htmlContainer: ElementRef
  id;
  constructor(private store: StoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    let q = this.store.getDefaultState()
      .questions.filter(q => {
        if (q.id == id)
          return q
      })
    if (q.length > 0) {
      this.question = q[0]
      if (this.question.rules.length > 0)
        this.testable = true
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
  bindHTML(html) {
    this.htmlContainer.nativeElement.innerHTML = html
  }
  apply() {
    this.bindHTML(this.question.html)
    eval(this.c.getValue())
  }
  setType(e, type, rule, re) {
    if (type === "click") {
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].innerHTML = "Click"
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].style.color = "yellow"
      this.question.rules[rule].rule[re].action = "click"
    } else if (type === "double-click") {
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].innerHTML = "Double-Click"
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].style.color = "yellow"
      this.question.rules[rule].rule[re].action = "double-click"
    }
    else if (type === "value-check") {
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].innerHTML = "Value-Check"
      e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("SPAN")[0].style.color = "#44ff1a"
      this.question.rules[rule].rule[re].action = "value-check"
    }
    //console.log(this.question.rules)
  }

  testRules() {
    //in this implementatin for each rule the whole markup
    //is reset while there could be another setting to
    //hole the state
    for (var rule = 0; rule < this.question.rules.length; rule++) {
      this.apply()
      for (var subRule = 0; subRule < this.question.rules[rule].rule.length; subRule++) {
        let sr = this.question.rules[rule].rule[subRule]
        this.question.rules[rule].result = this.applySubrule(sr)        
      }
    }
    this.apply()
  }
  applySubrule(subrule) {
    switch (subrule.action) {
      case "click":
        return this.executeSurule("click", subrule.id, subrule.type)
      case "double-click":
        return this.executeSurule("double-click", subrule.id, subrule.type)
      case "value-check":
        return this.executeSurule("value-check", subrule.id, subrule.type)
      default:
        return null;
    }
  }
  executeSurule(action, id, type) {
    var element = this.htmlContainer.nativeElement.getElementsByTagName(type)[id]
    //let e = document.createEvent("")
    //e.initEvent("click", false)
    switch (action) {
      case "value-check":
        return (element.value)        
      default:
        element.click()
        return null
    }

  }

  create() {   
    
      if(this.question != null){    
    const model = {
      title: this.question.title,
      description: this.question.description,
      hardness: this.question.hardness,
      entryPoint: "",
      body: this.question.html,
      questionType: 0,
      rules: this.question.rules.map(r=>r.rule),
      script: this.c.getValue()      
    }  
    
    
    attachAuthHeader(http.post(getUrlFor("questions/complex")))    
      .send(model)      
      .end((err, res) => {
        if(res.status === 201){
          UIKit.notification({ message: 'successfully created', status: 'success' })
          this.router.navigate(['/supervisor/questions/complex']);
        }
      })
  }
}
}
