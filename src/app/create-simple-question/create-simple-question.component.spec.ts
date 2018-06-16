import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSimpleQuestionComponent } from './create-simple-question.component';

describe('CreateSimpleQuestionComponent', () => {
  let component: CreateSimpleQuestionComponent;
  let fixture: ComponentFixture<CreateSimpleQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSimpleQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSimpleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
