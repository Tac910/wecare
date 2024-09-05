import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonateDialogComponent } from '../donate-dialog/donate-dialog.component';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

  constructor(public dialog: MatDialog) {}

  openDonateDialog() {
    this.dialog.open(DonateDialogComponent);
  }
}
