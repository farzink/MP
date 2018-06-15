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

@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.css'],
  animations: [slideInDownAnimation]
})
export class UserQuestionComponent implements OnInit, AfterViewInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  theme: string = "default"
  c: any;
  @ViewChild('editor') editor: ElementRef







  


  constructor() {
    
    
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

  }
  themeButtonClicked() {        
    if (this.c.getOption("theme") === "default")
      this.c.setOption("theme", "ambiance")
    else    
      this.c.setOption("theme", "default")
  }
  valueButtonClicked(){
    alert(this.c.getValue())
  }

}
