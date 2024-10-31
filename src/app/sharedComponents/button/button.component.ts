import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { StatesService } from '../../core/states.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Output() changeData: EventEmitter<any> = new EventEmitter();
  @Input() index: number = 0;

  changeColor: string = 'background-color: #fff';

  constructor(
    private changeDetector: ChangeDetectorRef,
    private states: StatesService
  ) {}

  click() {
    this.changeData.emit(this.index);
  }
}
