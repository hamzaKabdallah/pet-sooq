import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/enums/lang.enum';
import { StorageService } from '../../services/storage.service';
import { config } from '../../config';
import { SelectCustomEvent } from '@ionic/core';
import { DirectionService } from '../../services/direction.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input('title') title: string;
  @Input('withLangButton') withLang: boolean = false;
  languageUsed: Languages;
  supportedLanguage: any[] = config.supportedLanguages;


  constructor(private translateService: TranslateService,
    private storageService: StorageService,
    private directionService: DirectionService
  ) {
    this.init();
  }


  async init() {
    this.storageService.getString('lang').then((data) => {
      data.value ? this.languageUsed = data.value : this.languageUsed = Languages.AR;
      this.setTranslate(this.languageUsed);
    }).catch(console.log);
  }

  ngOnInit() { }

  setTranslate(lang: Languages): void {
    this.languageUsed = lang;
    this.storageService.setString('lang', lang)
      .then(() => {
        console.log(lang);
        this.translateService.use(lang);
        this.directionService.setDir(lang);
      }).catch(console.log);
  }

  onTranslateChange(event: SelectCustomEvent) {
    this.setTranslate(event.target.value);
    let lang = event.target.value;
    if (lang === this.languageUsed) {
      return
    }
    lang === Languages.AR ? this.setTranslate(Languages.EN) : this.setTranslate(Languages.AR);
  }
}
