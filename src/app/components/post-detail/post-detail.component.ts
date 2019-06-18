import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { Post } from '../../models/post';
import { Router, ActivatedRoute } from '@angular/router';
import { global } from '../../services/global';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService, UserService]
})
export class PostDetailComponent implements OnInit {
  public post: Post;
  public status: String;
  public url;
  public token;

  constructor(
    private _postService: PostService,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = global.url;
    this.token = this._userService.gettoken();
   }

  ngOnInit() {
    this.getPost();
  }


  getPost() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this._postService.getpost(id).subscribe(
        response => {
          if (response.status == 'success'){
            this.post = response.posts;
          } else {
            this._router.navigate(['/inicio']);
          }
        }
      ),
      error => {
        this._router.navigate(['/inicio']);
      }
    });
  }

  delete(id){
    this._postService.delete(this.token, id).subscribe(
      response => {
        this._router.navigate(['/inicio']);
        this.status = 'success';
      },
      error => {
        this.status = 'error';
      }
    )
  }

}
