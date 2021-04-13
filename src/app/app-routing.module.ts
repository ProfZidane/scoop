import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { HomeComputerComponent } from './home-computer/home-computer.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountManagementComponent } from './account-management/account-management.component';
import { WarehouseManagementComponent } from './warehouse-management/warehouse-management.component';

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
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home-computer',
    component: HomeComputerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'account-management',
    component: AccountManagementComponent
  },
  {
    path: 'warehouse-management',
    component: WarehouseManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
