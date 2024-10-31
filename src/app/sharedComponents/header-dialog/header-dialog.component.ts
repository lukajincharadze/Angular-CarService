import { Component, Input } from '@angular/core';
import { DataService } from '../../core/data.service';
import { StatesService } from '../../core/states.service';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../core/translation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header-dialog.component.html',
  styleUrls: ['./header-dialog.component.scss'],
})
export class HeaderDialogComponent {
  @Input() dialogPopup: boolean = true;
  @Input() source: string = '';

  textareaContent: string = 'აღწერა';

  userName: string = '';
  userLastname: string = '';
  userPhoneNum: string = '';
  userMail: string = '';
  userCompany: string = '';

  invalidEmail: boolean = false;
  emptyFields: boolean = false;
  invalid: boolean = false;

  disabled: boolean = false;
  subscription: Subscription = new Subscription();
  langs: any = {};
  index: number = 0;

  constructor(
    private dataService: DataService,
    private stateService: StatesService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    if (this.source == '') {
      this.stateService.isOpenHeaderDialog.next(true);
    } else if (this.source == 'isPopup') {
      this.stateService.isOpenPopup.next(true);
    } else if (this.source == 'isPopup2') {
      this.stateService.isOpenPopup2.next(true);
    }
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateFields(): boolean {
    this.emptyFields =
      !this.userName ||
      !this.userLastname ||
      !this.userCompany ||
      !this.userPhoneNum ||
      !this.userMail;
    this.invalidEmail = !this.validateEmail(this.userMail);

    return !this.emptyFields && !this.invalidEmail;
  }

  validatePhoneNumber(event: any): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.userPhoneNum = input.value;
  }

  closeDialogPopup() {
    if (this.source == '') {
      this.stateService.isOpenHeaderDialog.next(false);
    } else if (this.source == 'isPopup') {
      this.stateService.isOpenPopup.next(false);
    } else if (this.source == 'isPopup2') {
      this.stateService.isOpenPopup2.next(false);
    }
    this.dialogPopup = false;
  }

  request() {
    if (!this.validateFields()) {
      return;
    }

    const data = {
      userMail: this.userMail,
      userCompany: this.userCompany,
      userName: this.userName,
      userLastname: this.userLastname,
      userPhoneNum: this.userPhoneNum,
    };

    this.dataService.sendData('http://127.0.0.1:5000/mail', data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    this.closeDialogPopup();
    this.disabled = true;
  }
}
