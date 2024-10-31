import { Component } from '@angular/core';
import { CardComponentComponent } from '../sharedComponents/card-component/card-component.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../core/data.service';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [CardComponentComponent, CommonModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss',
})
export class Section1Component {
  statInfo: any[] = [];
  langs: any = {};
  index: number = 0;

  subscription: Subscription = new Subscription();

  constructor(
    private dataService: DataService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
    this.statInfo = this.dataService.getStatisticInfo();
    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }
}
