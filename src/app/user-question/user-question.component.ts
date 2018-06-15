import { Component, OnInit, AfterViewInit } from '@angular/core';
//var CodeMirror = require('codemirror')

import * as CodeMirror from 'codemirror/lib/codemirror'
//import 'codemirror/addon/hint/show-hint.css'



//require("codemirror/addon/hint/show-hint.js")
//require("codemirror/addon/hint/javascript-hint.js")

//var markdown = require("codemirror/mode/markdown/markdown.js")
//var javascript = require('codemirror/mode/javascript/javascript.js')

@Component({
  selector: 'app-user-question',
  templateUrl: './user-question.component.html',
  styleUrls: ['./user-question.component.css']
})
export class UserQuestionComponent implements OnInit, AfterViewInit {

  constructor() {     
    
  }
  ngAfterViewInit(){     
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: true,
      extraKeys: {"Ctrl-Space": "autocomplete"},
      mode: {name: "javascript", globalVars: true}
    });
  }
  ngOnInit() {
    
  }

}
