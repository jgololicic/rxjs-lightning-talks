import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, filter, map, pluck, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Customer} from './definitions';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) {
  }

  public getCustomers(): Observable<Customer[]> {
    return this.httpClient
      .get('./assets/customers.json')
      .pipe(
        pluck('data'),
        filter((customers: Customer[]) => customers !== undefined),
        delay(1000)
      );
  }

  public getCustomer(customerId: number): Observable<Customer> {

    // Fake server error
    if (customerId > 2) {
      throw Error('Error fetching customer details');
    }

    return this.httpClient
      .get('./assets/customers.json')
      .pipe(
        pluck('data'),
        tap(console.log),
        map((customers: Customer[]) => customers.filter(customer => customer.id == customerId).pop()),
        delay(1000)
      );
  }
}
