import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    //this.postService.getPosts();
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts.slice(0, 12));
  }

}
