import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { AuthguardGuard } from './authguard.guard'; 

const routes: Routes = [
  { 
    path: 'auth/login', 
    component: LoginComponent 
  },
  { path: 'home', 
    component: LoggedInComponent, 
    canActivate: [AuthguardGuard]
  },
  { path: '', 
    redirectTo: '/auth/login', 
    pathMatch: 'full' },  // Default to login
  { 
    path: '**', 
    redirectTo: '/auth/login' 
  },
  // {
  //   path : '',
  //   component : LoginComponent
  // },
  // {
  //   path : 'home',
  //   component : LoggedInComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
