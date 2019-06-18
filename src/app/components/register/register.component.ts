import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public pageTitle: string;
  public user: User;
  public status: string;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.pageTitle = 'Página registro';
    this.user = new User(1, "ROLE_USER", "", "");
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this._userService.register(this.user).subscribe(
      response => {
        this.status = "success";
        this._router.navigate(['inicio']);
      },
      err => {
        this.status = "error";
      }
    );
  }

}
