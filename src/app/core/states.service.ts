import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  btnIndex: number = 0;
  isOpenDialog: any = new BehaviorSubject<any>(false);
  isOpen$: any = this.isOpenDialog.asObservable();

  isOpenHeaderDialog: any = new BehaviorSubject<any>(false);
  isOpenHeader$: any = this.isOpenHeaderDialog.asObservable();

  isOpenPopup: any = new BehaviorSubject<any>(false);
  isPopup$: any = this.isOpenPopup.asObservable();

  isOpenPopup2: any = new BehaviorSubject<any>(false);
  isPopup2$: any = this.isOpenPopup2.asObservable();

  isOpenTermsPopup: any = new BehaviorSubject<any>(false);
  isOpenTerms$: any = this.isOpenTermsPopup.asObservable();

  isopenburger: any = new BehaviorSubject<any>(false);
  isopenburger$: any = this.isopenburger.asObservable();

  constructor() {}
}
