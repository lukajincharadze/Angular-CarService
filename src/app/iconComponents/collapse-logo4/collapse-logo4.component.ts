import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-logo4',
  standalone: true,
  imports: [],
  templateUrl: './collapse-logo4.component.html',
  styleUrl: './collapse-logo4.component.scss',
})
export class CollapseLogo4Component {
  @Input() color: string = '#2DC302';
}
