import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApidemoComponent } from './apidemo/apidemo.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { UpdatecomponetComponent } from './updatecomponet/updatecomponet.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Demo4Component } from './demo4/demo4.component';
@NgModule({
  declarations: [
    AppComponent,
    ApidemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    UpdatecomponetComponent,
    ParentComponent,
    ChildComponent,
    Demo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,

    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
     
     MatButtonModule,
     FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatAutocompleteModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
