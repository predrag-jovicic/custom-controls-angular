import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomcheckboxComponent } from './customcheckbox/customcheckbox.component';
import { CustomdropdownlistComponent } from './customdropdownlist/customdropdownlist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomcheckboxComponent,
    CustomdropdownlistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
