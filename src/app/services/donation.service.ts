import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private totalDonationSubject = new BehaviorSubject<number>(0);
  totalDonation$ = this.totalDonationSubject.asObservable();
  amountAdded: any;

  addDonation(amount: number) {
    if (!isNaN(amount) && amount > 0) {
      const newTotal = this.totalDonationSubject.value + amount;
      this.totalDonationSubject.next(newTotal);
    } else {
      console.error('Invalid donation amount:', amount);
    }
  }
}
