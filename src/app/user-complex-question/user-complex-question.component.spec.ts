import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplexQuestionComponent } from './user-complex-question.component';

describe('UserComplexQuestionComponent', () => {
  let component: UserComplexQuestionComponent;
  let fixture: ComponentFixture<UserComplexQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComplexQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComplexQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
