import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSimpleQuestionComponent } from './view-simple-question.component';

describe('ViewSimpleQuestionComponent', () => {
  let component: ViewSimpleQuestionComponent;
  let fixture: ComponentFixture<ViewSimpleQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSimpleQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSimpleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
