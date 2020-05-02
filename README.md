# Custom Controls

In this project there are 2 custom form controls created as components, and therefore can be reused quite easily. Every interaction with a control is followed by a visual animation. Available controls for now:

## Checkbox

A label which is located above a checkbox can be customized. Specify it by setting **labelText** attribute in the parent html. Example of html:

    <app-customcheckbox [labelText]="'Custom checkbox'" formControlName="checkboxCustom"></app-customcheckbox>
    
You can set the inital value for the checkbox regular way by using reactive or template-driven forms.

    this.mainForm = this.fb.group({
      textualField : '',
      checkboxCustom : false,
      dropdownListCustom : null
    });
    
## Dropdown list

To specify the items of a dropdown list set **items** property in the parent component. Use **DropdownListItem** as a template for dropdown list items. Set **required** attribute to true or false in html of the parent component or use reactive or template-driven form way to apply basic requirement validation. To customize the label of the dropdown item, set attribute **dropdownListLabel** to any string value. Example of html:

    <app-customdropdownlist [required]="false" [dropdownListLabel]="'Dropdown list'" [items]="items" formControlName="dropdownListCustom"></app-customdropdownlist>
