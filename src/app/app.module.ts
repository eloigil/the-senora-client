import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PageIndexComponent } from './pages/page-index/page-index.component';
import { PageAdviceNewComponent } from './pages/page-advice-new/page-advice-new.component';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';
import { PageChildComponent } from './pages/page-child/page-child.component';
import { PageListenComponent } from './pages/page-listen/page-listen.component';
import { PageSettingsComponent } from './pages/page-settings/page-settings.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdviceListComponent } from './components/advice-list/advice-list.component';
import { AdviceItemComponent } from './components/advice-item/advice-item.component';
import { ChildListComponent } from './components/child-list/child-list.component';
import { ChildItemComponent } from './components/child-item/child-item.component';
import { ChildAddFormComponent } from './components/child-add-form/child-add-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: PageIndexComponent,
  },

  {
    path: 'advices-new',
    component: PageAdviceNewComponent,
  },
  {
    path: 'auth',
    component: PageAuthComponent,
  },
  {
    path: 'settings',
    component: PageSettingsComponent,
  },
  {
    path: 'child/:id',
    component: PageChildComponent,
  },
  {
    path: 'listen',
    component: PageListenComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PageIndexComponent,
    PageAdviceNewComponent,
    PageAuthComponent,
    PageChildComponent,
    PageListenComponent,
    PageSettingsComponent,
    LoginComponent,
    SignupComponent,
    AdviceListComponent,
    AdviceItemComponent,
    ChildListComponent,
    ChildItemComponent,
    ChildAddFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
