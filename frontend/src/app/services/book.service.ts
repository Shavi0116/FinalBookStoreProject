import { Injectable } from '@angular/core';
import {Book} from '../shared/models/books';
import { sample_book } from '../../data1';
import { Tag } from '../shared/models/tags';
import {sample_tags} from '../../data1';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BOOKS_BY_SEARCH_URL, BOOKS_BY_TAG_URL, BOOKS_TAGS_URL, BOOKS_URL, BOOK_BY_ID_URL } from '../shared/models/constants/url';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  //Methods

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(BOOKS_URL);
  }

  getAllBooksBySearchTerm(searchTerm:string){
    return this.http.get<Book[]>(BOOKS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(BOOKS_TAGS_URL);
  }

  getAllBooksByTag(tag:string):Observable<Book[]>{
    return tag=="All"?
    this.getAll()://if
    this.http.get<Book[]>(BOOKS_BY_TAG_URL + tag);//else
  }

  getBookById(foodId:string):Observable<Book>{
    return this.http.get<Book>(BOOK_BY_ID_URL + foodId);
  }
}
