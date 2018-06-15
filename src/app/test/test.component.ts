import { Component, OnInit, HostBinding} from '@angular/core';
import { slideInDownAnimation } from '../animations'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [slideInDownAnimation]
})

export class TestComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor() { 
    
  }

  ngOnInit() {
  }
  getQuestion(e){
    alert(e)
  }
}
