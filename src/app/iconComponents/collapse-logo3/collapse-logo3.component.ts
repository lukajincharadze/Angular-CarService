import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-logo3',
  standalone: true,
  imports: [],
  templateUrl: './collapse-logo3.component.html',
  styleUrl: './collapse-logo3.component.scss',
})
export class CollapseLogo3Component {
  @Input() color: string = '#FFCD00';
}
