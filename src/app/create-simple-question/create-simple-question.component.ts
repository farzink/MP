import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror'

import 'codemirror/mode/javascript/javascript'
@Component({
  selector: 'app-create-simple-question',
  templateUrl: './create-simple-question.component.html',
  styleUrls: ['./create-simple-question.component.css']
})
export class CreateSimpleQuestionComponent implements OnInit {
  theme: string = "default"
  c: any;
  @ViewChild('editor') editor: ElementRef
  constructor() { }

  ngOnInit() {
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
  themeButtonClicked() {
    if (this.c.getOption("theme") === "default")
      this.c.setOption("theme", "ambiance")
    else
      this.c.setOption("theme", "default")
  }
  verify(){
    var x = { "func": 2}
    console.log(JSON.stringify(x))
     //var x = JSON.parse(JSON.stringify(f))
    //console.log(x)
    //if(eval(this.c.getValue())=== undefined)
    //console.log("ok")
  }

}
