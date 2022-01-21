import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const imports = [
  CommonModule,
  ReactiveFormsModule
];

const exports = [
  CommonModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: [
    ...exports
  ]
})
export class SharedModule { }
