import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  public customers: any[];

  constructor(private httpClient: HttpClient) {
    this.customers = [];


  }

  public getBanks(): Observable<any> {
    return this.httpClient
      .get('./assets/banks.json')
      .pipe(
        pluck('data'),
        filter(banks => banks !== undefined)
      );
  }
}
