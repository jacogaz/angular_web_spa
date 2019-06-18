import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { Post } from 'src/app/models/post';
import { global } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService, UserService]
})
export class HomeComponent implements OnInit {
  public posts: Array<Post>;
  public status: String;
  public identity;
  public url;
  config: any;
  public counting;

  constructor(
    private _postService: PostService
  ) {
    this.identity;
    this.url = global.url;
    this.counting = [0, 1, 2];
  }

  ngOnInit() {
    this._postService.getposts().subscribe(
      response => {
        if (response.status == 'success') {
          this.posts = response.posts;
          this.posts = this.posts.reverse();
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.posts.length
          };
          this.status = response.status;
          this.modifyContent();
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
      }
    );
  }

  modifyContent(){
    for (let content of this.posts) {
      content['content'] = content['content'].substr(0, 100);
    }
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
