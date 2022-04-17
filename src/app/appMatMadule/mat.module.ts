import { NgModule } from '@angular/core';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{ NoopAnimationsModule} from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const material=[
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  TextFieldModule,
  MatFormFieldModule,
  BrowserAnimationsModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[
    material
  ]
})
export class MatModule { }
