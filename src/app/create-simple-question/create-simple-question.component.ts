import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror'
import * as UIKit from 'uikit/dist/js/uikit.min.js'
import 'codemirror/mode/javascript/javascript'
@Component({ selector: 'app-create-simple-question', templateUrl: './create-simple-question.component.html', styleUrls: ['create-simple-question.component.scss'] })
export class CreateSimpleQuestionComponent implements OnInit {
  theme: string = "default"
  c: any;
  @ViewChild('editor') editor: ElementRef
  @ViewChild('entryPoint') entryPoint: ElementRef
  @ViewChild('resultHtml') resultHtml: ElementRef
  @ViewChild('parameters') parameters: ElementRef


  constructor() { }
  hardness = "EASY"
  ngOnInit() { }
  ngAfterViewInit() {
    this.c = CodeMirror.fromTextArea(this.editor.nativeElement, {
      lineNumbers: true,
      extraKeys: {
        "Ctrl-Space": "autocomplete"
      },
      mode: {
        name: "javascript",
        globalVars: true
      },
      styleActiveLine: true,
      matchBrackets: true
    });
  }
  themeButtonClicked() {
    if (this.c.getOption("theme") === "default")
      this.c.setOption("theme", "ambiance")
    else
      this.c
        .setOption("theme", "default")
  }
  verify() {

    //this should be defined by supervisor as the name of the main function
    //which user should at least define in his/her code
    //let fun = "calc"
    if (eval(this.c.getValue()) === undefined && this.c.getValue() !== "") {
      console.log("ok")
      let name = "testarea"
      if (document.getElementById(name)) {
        document.getElementById(name).remove()

        // @ts-ignore
        //  calc = ""
      }
      var sc = document.createElement("script")
      sc.id = name
      sc.type = "text/javascript";
      sc.innerHTML = this.c.getValue()
      document.getElementsByTagName("head")[0].appendChild(sc);
      try {
        // @ts-ignore
        if (this.entryPoint !== "") {
          let params = this.parameters.nativeElement.value.split(",")
            .map(e => parseInt(e.trim()))
          let func =window[this.entryPoint.nativeElement.value]
          // for (var i = 0; i < params.length; i++) {
          //   func.arguments[i] = params[i]
          // }
          this.resultHtml.nativeElement.innerHTML = func(...params)
        }
      }
      catch{
        UIKit.notification({ message: 'entrypoint should be provided', status: 'danger' })
      }
    }



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

}
