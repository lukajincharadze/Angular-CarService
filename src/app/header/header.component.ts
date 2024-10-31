import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';

import { HeaderCarouselComponent } from '../sharedComponents/header-carousel/header-carousel.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderCarouselComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  langs: any = {};
  index: number = 0;

  subscription: Subscription = new Subscription();

  constructor(private translationService: TranslationService) {}

  gotoSection(frag: string) {
    document.getElementById(frag)?.scrollIntoView();
  }

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }

  //   clicked: number = 0;
  //   willShowBlock: boolean = false;

  //   clickMe() {
  //     this.clicked += 1;
  //   }

  //   contextMenuInfo: any = {
  //     pageX: 0,
  //     pageY: 0,
  //     willShow: false,
  //   };

  //   tooltipInfo: any = {
  //     pageX: 0,
  //     pageY: 0,
  //     willShow: false,
  //   };

  //   contextClicked: boolean = false;

  //   toggleContextMenu(willShowBlock: boolean, event: MouseEvent | null = null) {
  //     if (event !== null) {
  //       event.preventDefault();
  //       this.contextMenuInfo.pageX = event.pageX;
  //       this.contextMenuInfo.pageY = event.pageY;
  //     }
  //     this.contextMenuInfo.willShow = willShowBlock;
  //   }

  //   @HostListener('document:click')
  //   closeContextMenu() {
  //     setTimeout(() => {
  //       if (!this.contextClicked) {
  //         this.toggleContextMenu(false);
  //       }
  //     }, 10);
  //   }

  //   contextClick() {
  //     this.contextClicked = true;
  //     setTimeout(() => {
  //       this.contextClicked = false;
  //     }, 20);
  //   }

  //   onMouseMove(inside: boolean, event: MouseEvent) {
  //     if (this.tooltipInfo.willShow !== inside) {
  //       this.tooltipInfo.willShow = inside;
  //     }
  //     this.tooltipInfo.pageX = event.pageX - 50;
  //     this.tooltipInfo.pageY = event.pageY + 15;
  //   }
}
