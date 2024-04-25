import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/books';
import { BookService } from '../services/book.service';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagsComponent } from '../header/tags/tags.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule, FontAwesomeModule,TagsComponent,NotfoundComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  books:Book[]=[];
  constructor(private bookService:BookService, activatedRoute:ActivatedRoute, private http:HttpClient){
    let bookObservable=Observable<Book[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.bookService.getAllBooksBySearchTerm(params.searchTerm).subscribe((serverBooks)=>{
          this.books=serverBooks;
        })
      else if(params.tag)
        this.bookService.getAllBooksByTag(params.tag).subscribe((serverBooks)=>{
          this.books=serverBooks;
        })
      else
        this.bookService.getAll().subscribe((serverBooks)=>{
          this.books=serverBooks;
        })
    })
    
  }
  ngOnInit(): void {
    
  }
}

