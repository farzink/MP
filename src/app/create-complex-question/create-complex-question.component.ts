import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/mode/htmlmixed/htmlmixed'


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
  constructor() { }
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
    this.htmlContainer.nativeElement.innerHTML = ""
    this.htmlContainer.nativeElement.innerHTML = this.c.getValue()
    let htmlParser = new DOMParser();
    let doc = htmlParser.parseFromString(this.c.getValue(), "text/html");
    var elements = this.htmlContainer.nativeElement.children;
    for (var i = 0; i < elements.length; i++) {
      {
        elements[i].addEventListener("click", (e) => {
          this.isSpanRequested = true
        })
      }

    }
  }

  spanMode(){
    this.isSpanRequested = false
  }

}