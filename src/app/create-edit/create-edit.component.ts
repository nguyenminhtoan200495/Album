import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Post }         from '../post';
import { PostService }  from '../post.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit() {
  }

}
