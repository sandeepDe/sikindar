import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DropdownOption } from 'src/app/models/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  contractNumber = '';

  @Output() childData: EventEmitter<string> = new EventEmitter();
  sendInputValue = (inputValue: string) => {
    this.childData.emit(inputValue);
  };

  @Input()
  label: string = 'Pick one';

  @Input() parentData: DropdownOption[] = [];
  myControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.contractNumber = event.option.value;
  }
}
