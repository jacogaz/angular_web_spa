import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {
  public pageTitle;
  public user: User;
  public identity;
  public token;
  public status;

  constructor(
    private _userService: UserService
  ) {
    this.pageTitle = 'Editar perfil';
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.user = new User(this.identity.sub, this.identity.role, this.identity.email, '');
   }

  ngOnInit() {
  }

  onSubmit(form){
    this._userService.update(this.token, this.user).subscribe(
      (response)=> {
        if(response && response.status) {
          this.status = 'success';

          if(response.changes.email) {
            this.user.email = response.changes.email;
          }
          this.identity = this.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));
        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
      }
    );
  }

}
