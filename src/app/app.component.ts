import {Component, OnInit} from '@angular/core';
import {CustomersService} from './customers.service';
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

  public customers$: Observable<any>;

  constructor (public customersService: CustomersService) {
    this.customers$ = this.customersService.getCustomers();
  }
}
