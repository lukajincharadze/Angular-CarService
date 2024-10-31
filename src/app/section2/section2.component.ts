import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CollapseLogo1Component } from '../iconComponents/collapse-logo1/collapse-logo1.component';
import { CollapseLogo2Component } from '../iconComponents/collapse-logo2/collapse-logo2.component';
import { CollapseLogo3Component } from '../iconComponents/collapse-logo3/collapse-logo3.component';
import { CollapseLogo4Component } from '../iconComponents/collapse-logo4/collapse-logo4.component';
import { CollapseLogo5Component } from '../iconComponents/collapse-logo5/collapse-logo5.component';
import { DataService } from '../core/data.service';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';
import { StatesService } from '../core/states.service';
import { CollapseLogo6Component } from '../iconComponents/collapse-logo6/collapse-logo6.component';
import { HeaderDialogComponent } from '../sharedComponents/header-dialog/header-dialog.component';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    CollapseLogo1Component,
    CollapseLogo2Component,
    CollapseLogo3Component,
    CollapseLogo4Component,
    CollapseLogo5Component,
    CollapseLogo6Component,
    HeaderDialogComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component {
  readonly panelOpenState = signal(false);
  collapseImg: number = 0;
  collapseInfo: any[] = [];
  dialogPopup: boolean = false;
  langs: any = {};
  index: number = 0;

  readonly mail = signal('');
  readonly dialog = inject(MatDialog);

  subscription: Subscription = new Subscription();

  constructor(
    private dataService: DataService,
    private stateService: StatesService,
    private translationService: TranslationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.collapseInfo = this.dataService.getCollapseInfo();
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.dataService.langStatus$.subscribe((res: any) => {
        this.index = res;
        this.changeDetectorRef.markForCheck();
      })
    );

    this.subscription.add(
      this.stateService.isPopup$.subscribe((res: any) => {
        this.dialogPopup = res;
      })
    );
  }

  changePic(i: number) {
    this.collapseImg = i;
  }

  toggleDialogPopup() {
    this.dialogPopup = true;
  }
}
