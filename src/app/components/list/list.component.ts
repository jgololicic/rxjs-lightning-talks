import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomersService} from '../../customers.service';
import {Customer} from '../../definitions';
import {Observable, Subscription} from 'rxjs';
import {NavigationError, NavigationStart, Router} from '@angular/router';
import {filter, mapTo} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  public customers: Customer[];
  private subscription: Subscription[] = [];

  public navigationError$: Observable<boolean>;
  public navigationLoading$: Observable<boolean>;

  constructor(private customersService: CustomersService, private router: Router) {

    /**
     * Create observable that emits when router notifies about error
     */
    this.navigationError$ = this.router.events.pipe(
      filter(event => event instanceof NavigationError),
      mapTo(true)
    );

    /**
     * Create observable that emits when router starts to navigate to next route (before resolvers are executed)
     */
    this.navigationLoading$ = this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      mapTo(true)
    );
  }

  ngOnInit() {
    this.subscription.push(
      this.customersService.getCustomers()
        .subscribe(customers => this.customers = customers)
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

}
