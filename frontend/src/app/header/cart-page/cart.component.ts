import { Component } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/Cartitem';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TitleComponent } from '../../title/title.component';
import { NotfoundComponent } from '../../notfound/notfound.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterOutlet,TitleComponent,NotfoundComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!:Cart;
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.book.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.book.id, quantity);
  }
}
