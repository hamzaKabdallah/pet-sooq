import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicStorageModule } from '@ionic/storage-angular';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';

const pages = [
  LoginPageModule,
  RegisterPageModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...pages,
    SharedModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    FormsModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  exports: []
})
export class AuthenticationModule { }
