import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  form: FormGroup;
  submitted = false;
  // languageUsed: Languages = Languages.AR;

  constructor(private fb: FormBuilder) {

    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });

   }

  onSubmit() {
    this.submitted = true;
    if (!this.form.valid) return;
      
    console.log(this.form.value)
   
  }

  get formControls(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  ngOnInit() { 
  }

  // setTranslate(lang: Languages): void {
  //   console.log(lang)
  //   this.languageUsed = lang;
  //   this.translateService.use(lang);
  // }

  // onTranslateChange() {
  //   this.languageUsed === Languages.AR ? this.setTranslate(Languages.EN) : this.setTranslate(Languages.AR)
  // }
  
}
