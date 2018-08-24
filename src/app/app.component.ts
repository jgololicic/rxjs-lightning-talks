import {Component, OnInit} from '@angular/core';
import {CustomersService} from './customers.service';
import {Observable} from 'rxjs';

/**
 * use merge operator to create animation
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public customers$: Observable<any>;

  constructor (public customersService: CustomersService) {
  }

  public ngOnInit(): void {
    this.customers$ = this.customersService.getCustomers();
  }


}
