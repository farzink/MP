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

const appRoutes: Routes = [
  
  { path: 'test', component: TestComponent },
  { path: 'supervisor-create-question', component: SupervisorCreateQuestionComponent },
  { path: 'user-question', component: UserQuestionComponent },
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
    UserQuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  providers: [],
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