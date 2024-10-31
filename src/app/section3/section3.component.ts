import { Component } from '@angular/core';
import { Section3LogoComponent } from '../iconComponents/section3-logo/section3-logo.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { DataService } from '../core/data.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../core/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [Section3LogoComponent, FormsModule, CommonModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss',
})
export class Section3Component {
  userMail: string = '';
  disabled: boolean = false;
  invalid: boolean = false;
  langs: any = {};
  index: number = 0;

  subscription: Subscription = new Subscription();

  phoneForm: FormGroup;

  constructor(
    private dataService: DataService,
    private translationService: TranslationService,
    private formBuilder: FormBuilder
  ) {
    this.phoneForm = this.formBuilder.group({
      phone: ['+995 ', [Validators.required, this.phoneValidator]],
    });
  }

  phoneValidator(control: any) {
    const value = control.value;
    const phoneRegex = /^\+995 5\d{8}$/;

    if (value && !phoneRegex.test(value)) {
      return {
        invalidPhone: true,
      };
    }
    return null;
  }

  validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  errorShow: boolean = false;
  request() {
    if (this.phoneForm.valid) {
      this.errorShow = false;
      const phoneNumber = this.phoneForm.controls['phone'].value;
      console.log('Sending phone number:', phoneNumber);
      this.dataService
        .sendData('http://127.0.0.1:5000/mail', { phone: phoneNumber })
        .subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log('Phone number is invalid.');
      this.errorShow = true;
    }
  }

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;

    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }

  numberFunc(event: any) {
    let inputVal = event.target.value;

    inputVal = inputVal.replace(/[^0-9]/g, '');
    if (!inputVal.startsWith('995')) {
      inputVal = '995 ';
    } else {
      inputVal = `995 ${inputVal.substring(3)}`;
    }
    event.target.value = `+${inputVal}`;
    this.phoneForm.controls['phone'].setValue(`+${inputVal}`);
  }
}
