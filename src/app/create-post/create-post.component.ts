import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Post }         from '../post';
import { PostService }  from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  //@Input() post: Post;
  post: Post = {
    id: null,
    userId: 0,
    title: '',
    body: ''
  };
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  createPost(): void {
    console.log(this.post.id);
    console.log(this.post);
    //this.postService.addPost(this.post);
    this.postService.addPost(this.post)
      .subscribe(post => {
        console.log('created post', post);

        this.posts.push(post);
        // show toast: SUCCESS
      }, err => {
        //....
        // show toast: ERROR
      });
      
    //this.location.back();
    
  }

}
