import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showLoader: boolean = false;

  displayedColumns: string[] = [
    'requestId',
    'taskDescription',
    'production',
    'productionId',
    'project',
    'talentName',
    'priority',
    'auditPeriod',
    'request',
    'closed',
    'actions'
  ];
  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this.showLoader = true;

    this._taskService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data;
      this.showLoader = false;
    });
  }

  dataSource = new MatTableDataSource(this.tasks);
}
