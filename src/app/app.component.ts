import {Component, OnInit} from '@angular/core';
import {BankService} from './bank.service';
import {Observable} from 'rxjs';

/**
 * Use operators - pluck
 * Avoid redundant state
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public banks$: Observable<any>;

  constructor (public bankService: BankService) {
    this.banks$ = this.bankService.getBanks();
  }

  public onLoanSelected(bank: any): void {
    // Go to dialog
    console.log(`${bank.name} forwarding to dialog`);
  }
}
