import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  amount: number = 0;

  constructor(
    private fb: FormBuilder,
    private donationService: DonationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]], // 16 digits
      expiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]], // MM/YY format
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]] // 3 digits
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.amount = params['amount'] || 0;
    });
  }

  get cardNumber() {
    return this.paymentForm.get('cardNumber')!;
  }

  get expiry() {
    return this.paymentForm.get('expiry')!;
  }

  get cvv() {
    return this.paymentForm.get('cvv')!;
  }

  onPay() {
    if (this.paymentForm.valid) {
      // Process payment
      const amount = this.paymentForm.value.amount;
      this.donationService.addDonation(amount);
      this.router.navigate(['/']);
    }
  }
}
