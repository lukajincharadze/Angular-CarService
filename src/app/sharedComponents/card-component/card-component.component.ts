import { Component, Input } from '@angular/core';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss',
})
export class CardComponentComponent {
  @Input() text: string = '';
  @Input() title: string = '';
  @Input() logo: string = '';

  langs: any = {};
  index: number = 0;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }
}
