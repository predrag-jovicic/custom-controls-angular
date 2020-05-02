# Customcontrols

In this project there are 2 custom form controls created as components, and therefore can be reused quite easily. Every interaction with a control is followed by a visual animation. Available controls for now:

## Checkbox

A label which is located above a checkbox can be customized. Specify it by setting **labelText** property in the parent component. You can set the inital value for the checkbox regular way by using reactive or template-driven forms. Example:

    <app-customcheckbox [labelText]="labelText" formControlName="checkboxCustom"></app-customcheckbox>

## Dropdown list

To specify the items of a dropdown list set **items** property in the parent component. Use **DropdownListItem** as a template for dropdown list items. Set **required** property to true or false in html of the parent component. Example

    <app-customdropdownlist [required]="false" formControlName="dropdownListCustom" [items]="items"></app-customdropdownlist>
