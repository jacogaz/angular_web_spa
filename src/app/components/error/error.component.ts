import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  providers: [UserService]
})
export class ErrorComponent implements OnInit {

  public identity;

  constructor(
    public _userService: UserService
  ) { }

  ngOnInit() {
    this.identity = this._userService.getidentity();
  }

}
