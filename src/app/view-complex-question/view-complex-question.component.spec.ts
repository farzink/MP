import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplexQuestionComponent } from './view-complex-question.component';

describe('ViewComplexQuestionComponent', () => {
  let component: ViewComplexQuestionComponent;
  let fixture: ComponentFixture<ViewComplexQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComplexQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComplexQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
