import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post;

  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
    private router : Router
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }

  save(): void {

    console.log(this.post);
    this.postService.updatePost(this.post).subscribe(data => {
      console.log('data', data);
      this.router.navigate(["/posts"])
    })


  }

  delete(post: Post): void {
    this.posts = this.posts.filter(h => h !== post);
    this.postService.deletePost(post).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
