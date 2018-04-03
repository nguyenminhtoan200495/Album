import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './post';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class PostService {

  private postsUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient, public messageService: MessageService) { }

  getPosts (): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  // addPost (post: Post) {
  //   return this.http.post(`http://jsonplaceholder.typicode.com/posts`, {
  //     title: post.title,
  //     body: post.body,
  //     userId: post.userId
  //   })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log('Error occured');
  //       }
  //     );
  // }

  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions).pipe(
      tap((post: Post) => this.log(`added post w/ id=${post.id}`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  updatePost (post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, httpOptions).pipe(
      tap(_ => this.log(`updated post id=${post.id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  deletePost (post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;
 
    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted post id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('PostService: ' + message);
  }

}
