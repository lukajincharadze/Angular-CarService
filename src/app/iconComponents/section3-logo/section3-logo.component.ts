import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section3-logo',
  standalone: true,
  imports: [],
  templateUrl: './section3-logo.component.html',
  styleUrl: './section3-logo.component.scss',
})
export class Section3LogoComponent {
  @Input() color: string = '#95A1B1';
}
