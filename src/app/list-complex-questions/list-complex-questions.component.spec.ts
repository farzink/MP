import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComplexQuestionsComponent } from './list-complex-questions.component';

describe('ListComplexQuestionsComponent', () => {
  let component: ListComplexQuestionsComponent;
  let fixture: ComponentFixture<ListComplexQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComplexQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComplexQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
