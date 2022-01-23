import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { StorageService } from './shared/services/storage.service';
import { Languages } from 'src/enums/lang.enum';
import { CustomTranslateService } from './services/custom-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  languageUsed: Languages;

  constructor(private translateService: TranslateService,
    private storageService: StorageService,
    private customeTranslateService: CustomTranslateService) {
    this.customeTranslateService.init();
  }


}
