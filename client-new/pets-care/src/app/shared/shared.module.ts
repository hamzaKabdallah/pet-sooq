import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const imports = [
  CommonModule,
  TranslateModule.forChild(),
  ReactiveFormsModule,
  IonicModule,
];

const exports = [
  CommonModule,
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
    ...imports,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    ...exports
  ]
})
export class SharedModule { }
