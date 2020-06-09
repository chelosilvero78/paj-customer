import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //private baseUrl = 'http://localhost:8090';
  private baseUrl = 'http://180.5.5.187:8084';
  private serviceUrlAnterior="/customers";
  private serviceUrlTestMasr="/ai/usuario/buscar/id";
  private serviceUrlTestMasrBuscar="/ai/usuario/buscar/nombre?buscar_texto= &pagina=1";
  private serviceUrl=this.serviceUrlTestMasr;

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + `${this.serviceUrlTestMasrBuscar}`);
  }

   getCustomer(id: number): Observable<Customer> {
    const url = `${this.baseUrl}${this.serviceUrl}/id_usuario=${id}`;
    return this.http.get<Customer>(url);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.baseUrl + `${this.serviceUrl}`, customer, httpOptions);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(this.baseUrl + `${this.serviceUrl}`, customer, httpOptions);
  }

  // deleteCustomer(customer: Customer | number): Observable<Customer> {
  //   const id = typeof customer === 'number' ? customer : customer.id;
  //   const url = `${this.baseUrl}/customers?id=${id}`;
  //   return this.http.delete<Customer>(url, httpOptions);
  // }
  constructor(
    private http: HttpClient
  ) { }
}
