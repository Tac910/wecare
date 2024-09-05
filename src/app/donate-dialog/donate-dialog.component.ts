import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DonationService } from '../services/donation.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-donate-dialog',
  templateUrl: './donate-dialog.component.html',
  styleUrls: ['./donate-dialog.component.css']
})
export class DonateDialogComponent {
  donateForm: any;
  
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DonateDialogComponent>,
    private router: Router,
    private donationService: DonationService
  ) {
    this.donateForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  get amount() {
    return this.donateForm.get('amount');
  }

  onDonate() {
    if (this.donateForm.valid) {
      const amount = this.donateForm.value.amount;
      this.donationService.amountAdded = amount;
      this.dialogRef.close(amount);
      this.router.navigate(['/payment'], { queryParams: { amount } });
    }
  }
}