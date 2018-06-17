import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror'

import 'codemirror/mode/javascript/javascript'
@Component({ selector: 'app-create-simple-question', templateUrl: './create-simple-question.component.html', styleUrls: ['./create-simple-question.component.css'] })
export class CreateSimpleQuestionComponent implements OnInit {
  theme: string = "default"
  c: any;
  @ViewChild('editor') editor: ElementRef
  constructor() { }

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
    let fun = "calc"
    if (eval(this.c.getValue()) === undefined && this.c.getValue() !== "") {
      console.log("ok")
      let name = "testarea"
      if (document.getElementById(name)){
        document.getElementById(name).remove()
        
        // @ts-ignore
        calc = ""
      }
      var sc = document.createElement("script")
      sc.id = name
      sc.type = "text/javascript";
      sc.innerHTML = this.c.getValue()
      document.getElementsByTagName("head")[0].appendChild(sc);
      try{
        // @ts-ignore
      console.log(calc())
      }
      catch{
        console.log("wrong")
      }
    }



  }

}
