import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-customcheckbox',
  templateUrl: './customcheckbox.component.html',
  styleUrls: ['./customcheckbox.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: CustomcheckboxComponent, multi: true }
  ]
})
export class CustomcheckboxComponent implements OnInit, ControlValueAccessor  {
  enabled : boolean = false;
  @Input() labelText;
  private onChange : (flag:boolean) => void;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.enabled = !this.enabled;
    this.onChange(this.enabled);
  }
  
  writeValue(flag: boolean): void {
    this.enabled = flag;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    
  }
}
