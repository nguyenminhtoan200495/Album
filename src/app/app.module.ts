import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { PostService } from './post.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { CreateEditComponent } from './create-edit/create-edit.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
    PhotosComponent,
    PostDetailComponent,
    PostDetailComponent,
    CreatePostComponent,
    MessagesComponent,
    CreateEditComponent
  ],
  providers: [ PostService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
