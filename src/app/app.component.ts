import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomersService} from './customers.service';
import {fromEvent, merge, Observable} from 'rxjs';
import {mapTo, switchMap} from 'rxjs/operators';

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
  @ViewChild('refreshBtn') btn;

  constructor (public customersService: CustomersService) {
  }

  public ngOnInit(): void {
    const remoteCustomers$ = this.customersService.getCustomers();
    const buttonClick$ = fromEvent(this.btn.nativeElement, 'click');

    this.customers$ = merge(
      buttonClick$.pipe(mapTo(undefined)),
      buttonClick$.pipe(switchMap(() => remoteCustomers$)),
      remoteCustomers$
    );

    this.customers$.subscribe(console.log);
  }
}
