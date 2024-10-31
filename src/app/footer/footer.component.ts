import { Component } from '@angular/core';
import { SignifyLogoComponent } from '../iconComponents/signify-logo/signify-logo.component';
import { Footerlogo1Component } from '../iconComponents/footerlogo-1/footerlogo-1.component';
import { Footerlogo2Component } from '../iconComponents/footerlogo-2/footerlogo-2.component';
import { Footerlogo3Component } from '../iconComponents/footerlogo-3/footerlogo-3.component';
import { GlopeSvgComponent } from '../iconComponents/glope-svg/glope-svg.component';
import { ArrSvgComponent } from '../iconComponents/arr-svg/arr-svg.component';
import { DynamicListsComponent } from '../sharedComponents/dynamic-lists/dynamic-lists.component';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';
import { FooterDialogComponent } from '../sharedComponents/footer-dialog/footer-dialog.component';
import { StatesService } from '../core/states.service';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SignifyLogoComponent,
    Footerlogo1Component,
    Footerlogo2Component,
    Footerlogo3Component,
    GlopeSvgComponent,
    ArrSvgComponent,
    DynamicListsComponent,
    CommonModule,
    FooterDialogComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  contact: string = 'ugt@ugt.ge';
  langs: any = {};
  index: number = 0;
  dialogPopup: boolean = false;

  arr: any[] = [
    {
      title: ['კონტაქტი', 'Contact'],
      list1: [
        'ჭავჭავაძის გამზ. 17ე, თბილისი 0179, საქართველო',
        'Chavchavadze Ave. 17e, Tbilisi 0179, Georgia',
      ],
      list2: ['+995 (32) 2 22 05 05', '+995 (32) 2 22 05 05'],
      list3: ['ugt@ugt.ge', 'ugt@ugt.ge'],
    },
  ];

  subscription: Subscription = new Subscription();

  constructor(
    private translationService: TranslationService,
    private dataService: DataService,
    private stateService: StatesService
  ) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
    this.subscription.add(
      this.stateService.isOpenTerms$.subscribe((res: any) => {
        this.dialogPopup = res;
      })
    );
  }

  toggleFooterDialogPopup() {
    this.stateService.isOpenTermsPopup.next(true);
  }

  changeText() {
    this.translationService.index = this.translationService.index === 1 ? 0 : 1;
    this.dataService.index = this.dataService.index === 1 ? 0 : 1;
    this.index = this.translationService.index;
    this.translationService.changeLang.next(this.index);
    this.dataService.changeLang.next(this.index);
  }
}
