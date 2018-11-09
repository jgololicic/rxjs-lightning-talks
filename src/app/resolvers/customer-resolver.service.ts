import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Customer} from '../definitions';
import {Observable} from 'rxjs';
import {CustomersService} from '../customers.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<Customer> {

  constructor(private customerService: CustomersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> {
    return this.customerService.getCustomer(route.params.id);
  }
}
