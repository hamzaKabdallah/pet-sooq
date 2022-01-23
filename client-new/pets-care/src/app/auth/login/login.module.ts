import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
