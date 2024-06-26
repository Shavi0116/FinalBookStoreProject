import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ORDER_CREATE_URL } from '../shared/models/constants/url';
import { Order } from '../shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order);
  }
}
