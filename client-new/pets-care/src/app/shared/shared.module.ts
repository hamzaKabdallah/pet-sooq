import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

const imports = [
  CommonModule,
  TranslateModule.forChild(),
  ReactiveFormsModule,
  IonicModule,
];

const exports = [
  CommonModule,
  TranslateModule,
  ReactiveFormsModule,
  HeaderComponent
];

const declaration = [
  HeaderComponent
];

@NgModule({
  declarations: [
    ...declaration
  ],
  imports: [
    ...imports
  ],
  exports: [
    ...exports
  ]
})
export class SharedModule { }
