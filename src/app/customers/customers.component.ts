import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  getHeroes(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  // delete(customer: Customer): void {
  //   this.customers = this.customers.filter(c => c !== customer);
  //   this.customerService.deleteCustomer(customer).subscribe();
  // }

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }
}