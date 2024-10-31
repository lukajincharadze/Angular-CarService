import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-logo1',
  standalone: true,
  imports: [],
  templateUrl: './collapse-logo1.component.html',
  styleUrl: './collapse-logo1.component.scss',
})
export class CollapseLogo1Component {
  @Input() color: string = '#2DC302';
}
