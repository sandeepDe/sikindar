import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RequestView } from 'src/app/models/requestView';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent {
  //dummy data

  showLoader: boolean = false;
  /* as of now we are not making any api call, not implemented loader here 
   For implementing loader please refer task-list component*/

  headers = [
    'requestId',
    'production',
    'productionId',
    'projectName',
    'talentName',
    'union',
    'priority',
    'requestRaised',
    'expectedClosure',
    'status',
    'actions'
  ];

  requests = [
    {
      requestId: 1,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    },
    {
      requestId: 2,
      production: 'Marvel',
      productionId: 100,
      projectName: 'Iron man',
      talentName: 'robert',
      union: 'DAG',
      priority: 'LOW',
      requestRaised: '2022-03-02',
      expectedClosure: '2022-03-02',
      status: 'Pending Internal'
    }
  ];

  dataSource = new MatTableDataSource(this.requests);
}
