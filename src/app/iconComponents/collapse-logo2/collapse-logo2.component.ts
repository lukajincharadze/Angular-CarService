import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-logo2',
  standalone: true,
  imports: [],
  templateUrl: './collapse-logo2.component.html',
  styleUrl: './collapse-logo2.component.scss',
})
export class CollapseLogo2Component {
  @Input() color: string = '#6C6EFB';
}
