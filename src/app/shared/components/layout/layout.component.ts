import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(public loaderService: LoaderService) {}

  isLoading$ = this.loaderService.isLoading;

  ngOnInit(): void {
    console.log('inside LayoutComponent ngOnInit');
  }
}
