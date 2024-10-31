import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-lists.component.html',
  styleUrl: './dynamic-lists.component.scss',
})
export class DynamicListsComponent {
  @Input() title: string = '';
  @Input() text1: string = '';
  @Input() text2: string = '';
  @Input() text3: string = '';
  @Input() text4: string = '';
  @Input() text5: string = '';
}
