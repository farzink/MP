import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorQuestionAssignComponent } from './supervisor-question-assign.component';

describe('SupervisorQuestionAssignComponent', () => {
  let component: SupervisorQuestionAssignComponent;
  let fixture: ComponentFixture<SupervisorQuestionAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorQuestionAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorQuestionAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
