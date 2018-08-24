import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, filter, map, pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public customers: any[];

  constructor(private httpClient: HttpClient) {
    this.customers = [];


  }

  public getCustomers(): Observable<any> {
    return this.httpClient
      .get('./assets/customers.json')
      .pipe(
        pluck('data'),
        map(customers => shuffle(customers)),
        filter(customers => customers !== undefined),
        delay(500)
      );
  }
}



/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
