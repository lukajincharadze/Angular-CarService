import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StatesService } from '../../core/states.service';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-footer-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer-dialog.component.html',
  styleUrls: ['./footer-dialog.component.scss'],
})
export class FooterDialogComponent {
  @Input() dialogPopup: boolean = true;

  subscription: Subscription = new Subscription();
  langs: any = {};
  footerInfo: any[] = [];
  index: number = 0;

  constructor(
    private stateService: StatesService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.footerInfo = this.translationService.footerDialogInfo();
    this.stateService.isOpenTermsPopup.next(true);
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }

  closeDialogPopup() {
    this.stateService.isOpenTermsPopup.next(false);
  }
}
