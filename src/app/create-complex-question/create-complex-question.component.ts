import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/mode/htmlmixed/htmlmixed'
import { style } from '@angular/animations';
import { StoreService } from '../store/StoreService';


import * as actions from '../actions/default-action'
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-complex-question',
  templateUrl: './create-complex-question.component.html',
  styleUrls: ['create-complex-question.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CreateComplexQuestionComponent implements OnInit {
  isSpanRequested = false
  theme: string = "default"
  c: any;
  @ViewChild('editor') editor: ElementRef
  @ViewChild('htmlContainerFrame') htmlContainerFrame: ElementRef
  @ViewChild('htmlContainer') htmlContainer: ElementRef
  @ViewChild('selectedControlHtml') selectedControlHtml: ElementRef
  @ViewChild('textifier') textifier: ElementRef
  @ViewChild('questionDescription') questionDescription: ElementRef
  @ViewChild('questionTitle') questionTitle: ElementRef
  
  defaultZoomFactor = 14
  currentZoomFactor = 14
  selectedControl = null
  hardness = "EASY"
  acceptable = false

  extras = []
  constructor(private store: StoreService, private router: Router) { }
  ngAfterViewInit() {
    this.c = CodeMirror.fromTextArea(this.editor.nativeElement, {
      lineNumbers: true,
      extraKeys: {
        "Ctrl-Space": "autocomplete"
      },
      mode: "htmlmixed",
      gutters: ["CodeMirror-lint-markers"],
      lint: true
    });
    this.c.on("change", (a, b) => {
      this.synthesize()
    })
  }
  ngOnInit() {
  }
  themeButtonClicked() {
    if (this.c.getOption("theme") === "default")
      this.c.setOption("theme", "ambiance")
    else
      this.c
        .setOption("theme", "default")
  }
  synthesizeHtml() {
    this.synthesize()
  }

  synthesize() {
    try {
      //eval(this.c.getValue())
      this.htmlContainer.nativeElement.innerHTML = ""
      this.htmlContainer.nativeElement.innerHTML = this.c.getValue()
      //let htmlParser = new DOMParser();
      //let doc = htmlParser.parseFromString(this.c.getValue(), "text/html");
      this.addHandlers(this.htmlContainer.nativeElement.getElementsByTagName("BUTTON"))
      this.addHandlers(this.htmlContainer.nativeElement.getElementsByTagName("INPUT"))
      this.acceptable = true
    } catch
    {
      this.acceptable = false

    }





  }


  addExtras(item) {

  }
  addHandlers(elements) {
    for (var i = 0; i < elements.length; i++) {
      {
        if (elements[i].tagName === "BUTTON" || elements[i].tagName === "INPUT") {
          elements[i].addEventListener("click", (e) => {
            this.spanMode(true, e)
          })
        }
      }
    }

  }

  spanMode(mode, data = null) {
    this.isSpanRequested = mode
    if (mode) {
      this.selectedControl = data
      this.selectedControlHtml.nativeElement.innerText = `( ${data.target.innerText} )`
    }
  }

  createSpan(e) {
    let id = this.textifier.nativeElement.value
    if (this.selectedControl && id !== "") {
      let parent = this.selectedControl.target.parentElement;
      if (parent.tagName === "DIV") {
        let spans = parent.getElementsByTagName("SPAN")
        for (var i = 0; i < spans.length; i++) {
          spans[i].remove()
        }
        parent.style.position = "relative"
        let span = document.createElement("span")
        span.style.position = "absolute"
        span.style.top = "0px"
        span.innerHTML = id
        span.title = `id is ${id}`
        parent.appendChild(span)
        this.selectedControl.target.id = id
      }
      else {
        console.log("parent needs to be div")
      }
    }
    this.spanMode(false)
  }

  zoom(factor) {
    if (factor) {
      this.currentZoomFactor += 1

    } else {
      this.currentZoomFactor -= 1
    }
    this.htmlContainerFrame.nativeElement.style.fontSize = `${this.currentZoomFactor}px`
  }

  zoomReset() {
    this.currentZoomFactor = this.defaultZoomFactor
    this.htmlContainerFrame.nativeElement.style.fontSize = `${this.currentZoomFactor}px`
  }

  initWithProvidedIds() {

  }
  setHardness(value) {
    if (value === 1) {
      this.hardness = "EASY"
    } else if (value === 2) {
      this.hardness = "MEDIUM"
    } else if (value === 3) {
      this.hardness = "HARD"
    }
  }
  accept(){
    let id = this.store.getDefaultStore().dispatch(actions.addQuestion({
      description: this.questionDescription.nativeElement.value,
      title: this.questionTitle.nativeElement.value,
      hardness: this.hardness,
      html: this.htmlContainer.nativeElement.innerHTML
    })).payload.id
    console.log(id)
    this.router.navigate([`/supervisor/questions/complex/rules/create/${id}`])
  }
}