import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSimpleQuestionsComponent } from './list-simple-questions.component';

describe('ListSimpleQuestionsComponent', () => {
  let component: ListSimpleQuestionsComponent;
  let fixture: ComponentFixture<ListSimpleQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSimpleQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSimpleQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
