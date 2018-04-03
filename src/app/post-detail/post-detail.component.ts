import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Post }         from '../post';
import { PostService }  from '../post.service';

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
    private location: Location
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
    this.postService.updatePost(this.post);
    console.log(this.post);
    this.location.back();
  }

  delete(post: Post): void {
    this.posts = this.posts.filter(h => h !== post);
    this.postService.deletePost(post).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
