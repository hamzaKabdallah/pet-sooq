import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { StorageService } from './shared/services/storage.service';
import { Languages } from 'src/enums/lang.enum';
import { CustomTranslateService } from './services/custom-translate.service';
import { DirectionService } from './shared/services/direction.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  languageUsed: Languages;

  constructor(private translateService: TranslateService,
    private storageService: StorageService,
    private customeTranslateService: CustomTranslateService,
    private DirectionService: DirectionService
    ) {
    this.customeTranslateService.init();
  }

  ngOnInit() {
    this.storageService.getString('lang')
    .then((data) => {
      this.DirectionService.setDir(data.value);
    })
  }
}
