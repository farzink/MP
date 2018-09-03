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
import { HomeComponent } from './home/home.component';
import { ListComplexQuestionsComponent } from './list-complex-questions/list-complex-questions.component';
import { ViewComplexQuestionComponent } from './view-complex-question/view-complex-question.component';

import { ViewSimpleQuestionComponent } from './view-simple-question/view-simple-question.component';
import { ListSimpleQuestionsComponent } from './list-simple-questions/list-simple-questions.component';
import { AuthGuard } from './utility/authgaurd';
import { AdminAuthGaurd } from './utility/adminauthguard';
import { SignInComponent } from './sign-in/sign-in.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { SupervisorQuestionAssignmentComponent } from './supervisor-question-assignment/supervisor-question-assignment.component';
import { SupervisorQuestionAssignComponent } from './supervisor-question-assign/supervisor-question-assign.component';
import { StudentHistoryComponent } from './student-history/student-history.component';
import { UserComplexQuestionComponent } from './user-complex-question/user-complex-question.component';
import { SignUpComponent } from './sign-up/sign-up.component';




const appRoutes: Routes = [
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'supervisor/questions/create', component: SupervisorCreateQuestionComponent, canActivate: [AdminAuthGaurd] },
  { path: 'student/tasks/simple/:id', component: UserQuestionComponent, canActivate: [AuthGuard] },
  { path: 'student/tasks/complex/:id', component: UserComplexQuestionComponent, canActivate: [AuthGuard] },
  { path: 'student/questions', component: UserQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'student/history', component: StudentHistoryComponent, canActivate: [AuthGuard] },
  { path: 'supervisor/questions/simple/create', component: CreateSimpleQuestionComponent, canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/questions/complex/create', component: CreateComplexQuestionComponent, canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/questions/complex/rules/create/:id', component: CreateComplexQuestionRulesComponent, canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/questions/complex/validation/create/:id', component: CreateComplexQuestionValidationComponent, canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/questions/complex', component: ListComplexQuestionsComponent, canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/questions/simple', component: ListSimpleQuestionsComponent, canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/students', component: ListStudentsComponent, canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/questions/complex/view/:id', component: ViewComplexQuestionComponent, canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/questions/simple/view/:id', component: ViewSimpleQuestionComponent,canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/studetns/view/:id', component: ViewStudentComponent,canActivate: [AdminAuthGaurd]},
  { path: 'supervisor/questions/assignments', component: SupervisorQuestionAssignmentComponent,canActivate: [AdminAuthGaurd]},  
  { path: 'supervisor/questions/assign/:id', component: SupervisorQuestionAssignComponent,canActivate: [AdminAuthGaurd]},  
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
    CreateComplexQuestionValidationComponent,
    HomeComponent,
    ListComplexQuestionsComponent,
    ViewComplexQuestionComponent,    
    ViewSimpleQuestionComponent,
    ListSimpleQuestionsComponent,
    SignInComponent,
    ListStudentsComponent,
    ViewStudentComponent,
    SupervisorQuestionAssignmentComponent,
    SupervisorQuestionAssignComponent,
    StudentHistoryComponent,
    UserComplexQuestionComponent,
    SignUpComponent
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
    StoreService,
    AuthGuard,
    AdminAuthGaurd
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