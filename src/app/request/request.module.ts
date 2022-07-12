import { MatPaginator } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from '../user/user.module';
import { RequestRoutingModule } from './request-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TaskListComponent } from './components/task-list/task-list.component';
@NgModule({
  declarations: [
    DashboardComponent,
    CreateRequestComponent,
    TaskListComponent,
    RequestListComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    RequestRoutingModule,
    HttpClientModule
  ],
  exports: [RequestListComponent]
})
export class RequestModule {}
