import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StoreService } from '../store/StoreService';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'

import * as UIKit from 'uikit/dist/js/uikit.min.js'
import * as actions from '../actions/default-action'
@Component({
  selector: 'app-create-complex-question-rules',
  templateUrl: './create-complex-question-rules.component.html',
  styleUrls: ['create-complex-question-rules.component.scss']
})
export class CreateComplexQuestionRulesComponent implements OnInit {
  c: any;
  rules = []
  question = null
  @ViewChild('editor') editor: ElementRef
  @ViewChild('htmlContainer') htmlContainer: ElementRef
  @ViewChild('tempRuleHtml') tempRuleHtml: ElementRef




  tempRuleStatus = false
  constructor(private store: StoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.store.getDefaultState().question.filter(q => {
    //       if (q.id === params.get('id')){
    //         this.question = q
    //         console.log(q)
    //       }
    //     })
    //   ))
    this.question = this.store.getDefaultState()
      .questions.filter(q => {
        if (q.id == id)
          return q
      })

  }
  ngAfterViewInit() {
    // this.c = CodeMirror.fromTextArea(this.editor.nativeElement, {
    //   lineNumbers: true,
    //   extraKeys: {
    //     "Ctrl-Space": "autocomplete"
    //   },
    //   mode: "javascript",
    //   gutters: ["CodeMirror-lint-markers"],
    //   lint: true
    // });
    // this.c.on("change", (a, b) => {

    // })


    if (this.question.length > 0)
      this.prepareForRuling(this.question[0].html)

  }
  clearHtmlRuleSection() {
    this.tempRuleHtml.nativeElement.innerHTML = ""
  }
  addRule() {
    this.tempRuleStatus = true
  }
  cancelRule() {
    this.tempRuleStatus = false
    this.clearHtmlRuleSection()
  }
  prepareForRuling(html) {
    this.htmlContainer.nativeElement.innerHTML = html
    this.addHandlers(this.htmlContainer.nativeElement.getElementsByTagName("BUTTON"), "BUTTON")
    this.addHandlers(this.htmlContainer.nativeElement.getElementsByTagName("INPUT"), "INPUT")
  }
  acceptRule() {
    let currentRules = this.tempRuleHtml.nativeElement.getElementsByTagName("BUTTON")
    if (currentRules != null && currentRules.length > 0) {
      let ruleToPush = []
      for (var i = 0; i < currentRules.length; i++) {
        ruleToPush.push({
          id: currentRules[i].innerText,
          type: currentRules[i].dataset.tn
        })
      }
      if (ruleToPush != []) {
        this.rules.push(ruleToPush)
      }
      this.clearHtmlRuleSection()
      UIKit.notification({ message: 'rule has been added successfully', status: 'success' })
      this.tempRuleStatus = false
      console.log(this.rules)
    }
  }

  addHandlers(elements, type) {
    for (var i = 0; i < elements.length; i++) {
      {
        if (elements[i].tagName === "BUTTON" || elements[i].tagName === "INPUT") {
          elements[i].addEventListener("click", (e) => {
            if (this.tempRuleStatus) {
              let rb = document.createElement("button")
              rb.innerText = e.target.id
              rb.classList.add("uk-button");
              if (type === "BUTTON") {
                rb.classList.add("uk-button-secondary");
                rb.dataset.tn = "BUTTON"
              }
              if (type === "INPUT") {
                rb.classList.add("uk-button-primary");
                rb.dataset.tn = "INPUT"
              }
              rb.addEventListener("click", (e) => {
                // @ts-ignore
                e.target.remove()
              })
              if (e.target.id !== "")
                this.tempRuleHtml.nativeElement.appendChild(rb)
            }
          })
        }
      }
    }

  }


  removeRule(index) {
    console.log(index)
    this.rules.splice(index, 1)
  }
  confirmRules() {
    if (this.question.length > 0) {

      this.store.getDefaultStore()
        .dispatch(actions.updateQuestionRules({
          id: this.question[0].id,
          rules: this.rules.map(r => {
            return {
              rule: r.map(re => {
                return {
                  id: re.id,
                  type: re.type,
                  action: ""
                }
              }),
              result: ""
            }
          })
        }))

      this.router.navigate([`/supervisor/questions/complex/validation/create/${this.question[0].id}`])
    }
    console.log(this.store.getDefaultState())

  }
}

