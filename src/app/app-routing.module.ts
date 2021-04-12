import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { HomeComputerComponent } from './home-computer/home-computer.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'init-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home-computer',
    component: HomeComputerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
