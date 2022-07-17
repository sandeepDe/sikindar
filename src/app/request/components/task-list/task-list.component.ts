import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, startWith } from 'rxjs';
import { DropdownOption } from 'src/app/models/dropdown';
import { ProjectName } from 'src/app/models/projectname';
import { DropdownService } from 'src/app/services/dropdown/dropdown.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

// import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from 'src/app/services/task/task.service';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, AfterViewInit {
  tasks: Task[] = [];
  showLoader: boolean = false;
  projectData: DropdownOption[] = [];

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
  constructor(
    private _taskService: TaskService,
    private _loaderService: LoaderService,
    private _dropdownService: DropdownService
  ) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  // getProjectAndContract = (eventData: any | string) => {
  //   this._dropdownService.getProjectAndContract(eventData).pipe(
  //     map((data) => {
  //       this.testdata = data;
  //       console.log(data);
  //     })
  //   );
  // };
  // dropDownOption: DropdownOption[] = [];
  // somedata!: any;
  // parentData: any;

  testData = '';

  getContractNum = (Cnum: string) => {
    this.testData = Cnum;
  };

  gettingDataFromChild = (childData: string) => {
    if (childData === '') {
      this._dropdownService
        .getAllProjectNames()
        .subscribe((data: ProjectName[]) => {
          this.projectData = data.map((pName) => {
            return {
              value: pName.projectName,
              viewValue: pName.projectName
            };
          });
        });
    } else {
      this._dropdownService
        .getProjectAndContract(childData)
        .subscribe((data: ProjectName[]) => {
          this.projectData = data.map((pName) => {
            return {
              value: pName.projectName,
              viewValue: pName.projectName
            };
          });
        });
    }
  };

  ngOnInit(): void {
    this._loaderService.startLoader();
    this._taskService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data;
      this._loaderService.stopLoader();
    });

    this._dropdownService
      .getAllProjectNames()
      .subscribe((data: ProjectName[]) => {
        this.projectData = data.map((pName) => {
          return {
            value: pName.projectName,
            viewValue: pName.projectName
          };
        });
      });
  }

  check = () => {
    console.log(this.projectData);
  };

  dataSource = new MatTableDataSource(this.tasks);
}
