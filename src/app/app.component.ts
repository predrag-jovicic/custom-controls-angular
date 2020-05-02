import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'customcontrols';
  mainForm : FormGroup;
  items = [
    { id : 1, text : "Option 1" },
    { id : 2, text : "Option 2" },
    { id : 3, text : "Option 3" },
    { id : 4, text : "Option 4" },
    { id : 5, text : "Option 5" },
    { id : 6, text : "Option 6" },
    { id : 7, text : "Option 7" }
  ];

  constructor(private fb:FormBuilder){
    this.mainForm = this.fb.group({
      textualField : '',
      checkboxCustom : false,
      dropdownListCustom : null
    });
  }

  checkValues(){
    console.log(this.mainForm);
  }
}
