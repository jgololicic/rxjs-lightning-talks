import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, pluck} from 'rxjs/operators';
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
        filter(customers => customers !== undefined)
      );
  }
}
