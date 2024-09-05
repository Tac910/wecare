import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { MatDialog } from '@angular/material/dialog';
import { DonateDialogComponent } from '../donate-dialog/donate-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalDonation: number = 0;
  goalAmount: number = 1000000; // 10 Lakhs in rupees

  constructor(private donationService: DonationService, public dialog: MatDialog) {}

  ngOnInit() {
    this.donationService.totalDonation$.subscribe(amount => {
      this.totalDonation = amount;
    });
  }

  get progressPercentage(): number {
    return (this.totalDonation / this.goalAmount) * 100;
  }

  openDonateDialog() {
    const dialogRef = this.dialog.open(DonateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.donationService.addDonation(result);
      }
    });
  }
}
