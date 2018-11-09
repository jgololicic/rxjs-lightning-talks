import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../../definitions';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public customerDetails$: Observable<Customer>;

  constructor(private route: ActivatedRoute) {

    /**
     * Here we pluck 'customer' property from route definition 'resolvers' property and
     * create new observable out of it. We subscribe to this observable directly in template
     * with 'async' pipe, check details.component.html.
     */
    this.customerDetails$ = this.route.data.pipe(
      pluck('customer')
    );
  }

  ngOnInit() {
  }

}
