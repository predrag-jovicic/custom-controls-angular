import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownListItem } from '../shared/DropdownListItem';

@Component({
  selector: 'app-customdropdownlist',
  templateUrl: './customdropdownlist.component.html',
  styleUrls: ['./customdropdownlist.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: CustomdropdownlistComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: CustomdropdownlistComponent, multi: true}
  ]
})
export class CustomdropdownlistComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() items : DropdownListItem[] = [];
  @Input() required : boolean;
  private onChange:(value:DropdownListItem) => void;
  resultsVisible : boolean = false;
  selectedText : string = "SELECT";
  constructor() { }

  ngOnInit() {

  }

  toggle(){
    this.resultsVisible = !this.resultsVisible;
  }

  selectOption(item : DropdownListItem){
    if(!this.resultsVisible)
      return;
    this.selectedText = item.text;
    this.onChange(item.id);
    this.resultsVisible = false;
  }

  writeValue(item : DropdownListItem): void {
    if(item == null)
      return;
    this.selectedText = item.text;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    
  }
  
  validate(control:AbstractControl): ValidationErrors {
    if(this.required && (control.value == null || control.pristine))
      return { 'required' : 'You must select an item from the dropdown list!' };
  }
}
