import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComplexQuestionRulesComponent } from './create-complex-question-rules.component';

describe('CreateComplexQuestionRulesComponent', () => {
  let component: CreateComplexQuestionRulesComponent;
  let fixture: ComponentFixture<CreateComplexQuestionRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComplexQuestionRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComplexQuestionRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
