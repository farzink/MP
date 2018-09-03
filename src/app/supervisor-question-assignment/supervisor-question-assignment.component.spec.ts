import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorQuestionAssignmentComponent } from './supervisor-question-assignment.component';

describe('SupervisorQuestionAssignmentComponent', () => {
  let component: SupervisorQuestionAssignmentComponent;
  let fixture: ComponentFixture<SupervisorQuestionAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorQuestionAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorQuestionAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
