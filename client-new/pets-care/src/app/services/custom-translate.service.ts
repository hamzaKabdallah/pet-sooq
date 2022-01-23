import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../shared/services/storage.service';
import { Languages } from 'src/enums/lang.enum';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {

  constructor(private translateService: TranslateService,
    private storageService: StorageService) { }


    async init() {
      this.storageService.getString('lang').then((data) => {
        data.value ? this.setTranslate(data.value) : this.setTranslate(Languages.AR);
      });
    }

    setTranslate(lang: Languages): void {
      this.translateService.use(lang);
      this.storageService.setString('lang', lang);
    }
}
