import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComplexQuestionComponent } from './create-complex-question.component';

describe('CreateComplexQuestionComponent', () => {
  let component: CreateComplexQuestionComponent;
  let fixture: ComponentFixture<CreateComplexQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComplexQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComplexQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
