import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { TranslationService } from '../core/translation.service';
import { DataService } from '../core/data.service';
import { StatesService } from '../core/states.service';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderDialogComponent } from '../sharedComponents/header-dialog/header-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, HeaderDialogComponent, CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  text: string = 'Geo';
  langs: any = {};
  index: number = 0;
  isOverlayActive: boolean = false;
  dialogPopup: boolean = false;

  subscription: Subscription = new Subscription();

  constructor(
    private translationService: TranslationService,
    private dataService: DataService,
    private stateService: StatesService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.dataService.langStatus$.subscribe((res: any) => {
        this.index = res;
        this.changeDetectorRef.markForCheck();
        this.text = res === 0 ? 'Eng' : 'Geo';
      })
    );

    this.subscription.add(
      this.stateService.isOpenHeader$.subscribe((res: any) => {
        this.dialogPopup = res;
      })
    );
  }

  width = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width = (event.target as Window).innerWidth;
    if (this.width >= 800) {
      this.isOverlayActive = false;
    }
  }
  gotoSection(frag: string) {
    const element = document.getElementById(frag);

    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      this.isOverlayActive = false;
      this.stateService.isopenburger.next(this.isOverlayActive);
    }
  }

  toggleOverlay() {
    this.isOverlayActive = !this.isOverlayActive;
    this.stateService.isopenburger.next(this.isOverlayActive);
  }

  changeText() {
    this.translationService.index = this.translationService.index === 1 ? 0 : 1;
    this.dataService.index = this.dataService.index === 1 ? 0 : 1;
    this.index = this.translationService.index;
    this.translationService.changeLang.next(this.index);
    this.dataService.changeLang.next(this.index);
  }

  toggleDialogPopup() {
    this.dialogPopup = true;
  }
}
