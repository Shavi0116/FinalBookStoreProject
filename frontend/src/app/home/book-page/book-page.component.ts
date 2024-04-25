import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Book } from '../../shared/models/books';
import { BookService } from '../../services/book.service';
import { NotfoundComponent } from '../../notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [RouterModule, CommonModule,RouterOutlet,NotfoundComponent,HttpClientModule],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent {
  book!: Book;
  constructor(activatedRoute:ActivatedRoute,private router:Router,bookService:BookService,private cartService:CartService, private http:HttpClient){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
        bookService.getBookById(params.id).subscribe(serverBook=>{
            this.book=serverBook
        });
    })
  }
  addToCart(){
    this.cartService.addToCart(this.book);
    this.router.navigateByUrl('/cart-page');
  }

}
