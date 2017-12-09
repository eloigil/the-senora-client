import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// ----SERVICES
import { AuthService } from './services/auth.service';

// ----GUARDS
import { RequireAuthParentGuard } from './guards/require-auth-parent.guard';
import { RequireAuthChildGuard } from './guards/require-auth-child.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';

// ----PAGES
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageAdviceNewComponent } from './pages/page-advice-new/page-advice-new.component';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';
import { PageChildComponent } from './pages/page-child/page-child.component';
import { PageListenComponent } from './pages/page-listen/page-listen.component';
import { PageSettingsComponent } from './pages/page-settings/page-settings.component';

// ----Components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdviceListComponent } from './components/advice-list/advice-list.component';
import { AdviceItemComponent } from './components/advice-item/advice-item.component';
import { ChildListComponent } from './components/child-list/child-list.component';
import { ChildItemComponent } from './components/child-item/child-item.component';
import { ChildAddFormComponent } from './components/child-add-form/child-add-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', canActivate: [RequireAuthParentGuard], component: PageMainComponent },
  { path: 'advices-new', canActivate: [RequireAuthParentGuard], component: PageAdviceNewComponent },
  { path: 'auth', canActivate: [RequireAnonGuard], component: PageAuthComponent },
  { path: 'settings', canActivate: [RequireAuthParentGuard], component: PageSettingsComponent },
  { path: 'child/:id', canActivate: [RequireAuthParentGuard], component: PageChildComponent },
  { path: 'listen', canActivate: [RequireAuthParentGuard], component: PageListenComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PageMainComponent,
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
  providers: [AuthService,
    RequireAuthParentGuard,
    RequireAuthChildGuard,
    RequireAnonGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
