import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SupervisorHomeComponent } from './supervisor-home/supervisor-home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SupervisorCreateQuestionComponent } from './supervisor-create-question/supervisor-create-question.component';
import { UserQuestionComponent } from './user-question/user-question.component';
import { UserQuestionsComponent } from './user-questions/user-questions.component';
import { StoreService } from './store/StoreService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateSimpleQuestionComponent } from './create-simple-question/create-simple-question.component';
import { CreateComplexQuestionComponent } from './create-complex-question/create-complex-question.component';
import { CreateComplexQuestionRulesComponent } from './create-complex-question-rules/create-complex-question-rules.component';
import { CreateComplexQuestionValidationComponent } from './create-complex-question-validation/create-complex-question-validation.component';




const appRoutes: Routes = [
  
  { path: 'test', component: TestComponent },
  { path: 'supervisor/questions/create', component: SupervisorCreateQuestionComponent },
  { path: 'user-question', component: UserQuestionComponent },
  { path: 'user-questions', component: UserQuestionsComponent },
  { path: 'supervisor/questions/simple/create', component: CreateSimpleQuestionComponent},
  { path: 'supervisor/questions/complex/create', component: CreateComplexQuestionComponent},
  { path: 'supervisor/questions/complex/rules/create/:id', component: CreateComplexQuestionRulesComponent},
  { path: 'supervisor/questions/complex/validation/create/:id', component: CreateComplexQuestionValidationComponent},
  { path: '**', component: PagenotfoundComponent }
];
 




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,        
    UserHomeComponent,
    SupervisorHomeComponent,
    PagenotfoundComponent,
    SupervisorCreateQuestionComponent,
    UserQuestionComponent,
    UserQuestionsComponent,
    CreateSimpleQuestionComponent,
    CreateComplexQuestionComponent,
    CreateComplexQuestionRulesComponent,
    CreateComplexQuestionValidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



 
 
// [

//  { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];