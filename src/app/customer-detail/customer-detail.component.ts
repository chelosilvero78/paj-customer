import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer;
  customers: Customer[];

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
      .subscribe(customer => this.customer = customer);
  }

    id_usuario: number=0;
    usuario_usuario: string;
    nombre_usuario: string;
    clave_usuario: string;
  //add(name: string, address: string, phone_number: string, email: string): void {
  add(id_usuario:number,nombre_usuario: string, usuario_usuario: string, clave_usuario): void {
    // name = name.trim();
    // address = address.trim();
    // phone_number = phone_number.trim();
    // email = email.trim();

    // if (!name && !address && !phone_number && !email) {
    //   return;
    // }
    this.customerService.addCustomer({id_usuario, usuario_usuario, nombre_usuario, clave_usuario} as Customer)
      .subscribe( () => this.back());
   }

   update(): void {
    this.customerService.updateCustomer(this.customer)
      .subscribe(() => this.back());
  }


  back(): void {
    this.location.back();
  }

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomer();
  }

}
