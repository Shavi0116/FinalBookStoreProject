import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { CartService } from '../services/cart.service';
import { Book } from '../shared/models/books';
import { BookService } from '../services/book.service';
import { CartItem } from '../shared/models/Cartitem';
import { CartComponent } from './cart-page/cart.component';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/user';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterModule,CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  searchTerm='';
  cartQuantity=0;
  user!:User;
  constructor(activatedRoute:ActivatedRoute, private router:Router, private cartService:CartService,private bookService:BookService, private userService:UserService) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm) this.searchTerm=params.searchTerm;
    });

    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity=newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser)=>{
      this.user=newUser;
    })
  }

  ngOnInit(): void {
  }
  
  logout(){
    this.userService.logout();
  }
  get isAuth(){
    return this.user.token;
  }

  search(term:string):void{
    if(term)
      this.router.navigateByUrl('/search/'+term);
    }

    addToCart(book:Book){
      this.cartService.addToCart(book);
      this.router.navigateByUrl('/cart');
    }
}
