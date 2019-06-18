import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Contact } from '../../models/contact';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [UserService]
})
export class ContactComponent implements OnInit {
  public status: string;
  public contact;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.contact = new Contact('', '', '');
   }

  ngOnInit() {
  }

  onSubmit(form) {
    this._userService.sendmail(this.contact).subscribe(
      response => {
        this.status = 'success';
        form.reset();
      },
      err => {
        console.log(err);
        this.status = 'error';
      }
    );
  }

}
