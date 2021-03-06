import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Role } from '../models/role';
import { AuthGuard } from '../user/auth.guard';
import { CreateRequestComponent } from './components/create-request/create-request.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      roles: [Role.USER]
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule {}
