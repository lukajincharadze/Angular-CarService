import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { CollapseLogo1Component } from './iconComponents/collapse-logo1/collapse-logo1.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { StatesService } from './core/states.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    FormsModule,
    CollapseLogo1Component,
    RouterOutlet,
    NavComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'signify';
  subscription: Subscription = new Subscription();

  constructor(private stateService: StatesService) {}

  ngOnInit() {
    this.subscription.add(
      this.stateService.isOpen$.subscribe((res: any) => {
        document.body.style.overflow = res ? 'hidden' : 'auto';
      })
    );
    this.subscription.add(
      this.stateService.isOpenTerms$.subscribe((res: any) => {
        document.body.style.overflow = res ? 'hidden' : 'auto';
      })
    );
    this.subscription.add(
      this.stateService.isopenburger$.subscribe((res: any) => {
        document.body.style.overflow = res ? 'hidden' : 'auto';
      })
    );
    this.subscription.add(
      this.stateService.isOpenHeader$.subscribe((res: any) => {
        document.body.style.overflow = res ? 'hidden' : 'auto';
      })
    );
    this.subscription.add(
      this.stateService.isPopup$.subscribe((res: any) => {
        document.body.style.overflow = res ? 'hidden' : 'auto';
      })
    );
    this.subscription.add(
      this.stateService.isPopup2$.subscribe((res: any) => {
        document.body.style.overflow = res ? 'hidden' : 'auto';
      })
    );
  }
}
