import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tag } from '../../shared/models/tags';
import { BookService } from '../../services/book.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,HttpClientModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  tags?:Tag[];

  constructor(bookService:BookService,private http:HttpClient) { 
    bookService.getAllTags().subscribe(serverTags=>{
      this.tags=serverTags;
    })
  }

  ngOnInit(): void {}
}
