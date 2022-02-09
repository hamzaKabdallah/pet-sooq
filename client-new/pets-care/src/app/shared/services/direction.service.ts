import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(
    @Inject(DOCUMENT) private doc,
    private storageService: StorageService
  ) { }

  setDir(lang: 'ar' | 'en') {
    lang === 'ar' ? this.doc.dir = 'rtl' : this.doc.dir = 'ltr';
  }

}
