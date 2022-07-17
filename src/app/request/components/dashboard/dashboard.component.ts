import { Component, OnInit } from '@angular/core';
import { DropdownOption } from 'src/app/models/dropdown';
import { GlobaldataService } from 'src/app/services/global/globaldata.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public loaderService: LoaderService) {}

  foods: DropdownOption[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  ngOnInit(): void {
    console.log('inside DashboardComponent ngOnInit');
    // this.loaderService.startLoader();
  }
}
