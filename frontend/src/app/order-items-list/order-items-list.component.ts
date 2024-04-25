import { Component,OnInit,Input } from '@angular/core';
import { Order } from '../shared/models/Order';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'order-items-list',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet],
  templateUrl: './order-items-list.component.html',
  styleUrl: './order-items-list.component.css'
})
export class OrderItemsListComponent implements OnInit {
  @Input()
  order!:Order;
  constructor() { }

  ngOnInit(): void {
  }

}
