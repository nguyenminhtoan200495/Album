import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent }   from './posts/posts.component';
import { PostDetailComponent }   from './post-detail/post-detail.component';
import { CreatePostComponent }   from './create-post/create-post.component';
import { AlbumsComponent }      from './albums/albums.component';
import { PhotosComponent }  from './photos/photos.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/create', component: CreatePostComponent },

  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'photos', component: PhotosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
