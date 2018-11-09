import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomersService} from './customers.service';

import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {DetailsComponent} from './components/details/details.component';
import {CustomerResolver} from './resolvers/customer-resolver.service';

const appRoutes: Routes = [
  {path: 'list', component: ListComponent},
  {
    path: 'details/:id',
    component: DetailsComponent,
    resolve: {
      customer: CustomerResolver // Define resolver to be resolved before routing happens
    }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
