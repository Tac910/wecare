import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DonateDialogComponent } from './donate-dialog/donate-dialog.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
    declarations: [					
      AppComponent,
      HomeComponent,
      DonateComponent,
      DonateDialogComponent,
      PaymentComponent,
      DonateComponent
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
