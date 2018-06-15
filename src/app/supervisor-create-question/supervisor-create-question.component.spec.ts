import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorCreateQuestionComponent } from './supervisor-create-question.component';

describe('SupervisorCreateQuestionComponent', () => {
  let component: SupervisorCreateQuestionComponent;
  let fixture: ComponentFixture<SupervisorCreateQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorCreateQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorCreateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
