import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComplexQuestionValidationComponent } from './create-complex-question-validation.component';

describe('CreateComplexQuestionValidationComponent', () => {
  let component: CreateComplexQuestionValidationComponent;
  let fixture: ComponentFixture<CreateComplexQuestionValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComplexQuestionValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComplexQuestionValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
