import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import 'rxjs/add/operator/map';
import { Stream } from 'stream';
import { User } from 'app/user';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [UserService]
})


export class MainComponent implements OnInit {
 
  users = [];
  friends = [];
  fofriends = [];
  selectedUser : User;

  constructor(private _userService:UserService) {
    this._userService.getData().subscribe(users => {
      this.users = users;
    })
  }
  
  onSelect(user : User) : void {
    this.selectedUser = user;
    this.friends = [];
    this.fofriends = [];

    this.users.forEach(x => {
      this.selectedUser.friends.forEach(y => {
        if(x.id === y)
        {
          this.friends.push(x);
        }
      })
    })

    this.friends.forEach(x => {
      this.fofriends.push(x.friends);
    })

    let fof = [].concat.apply([], this.fofriends);
    let f = Array.from(new Set(fof));

    this.fofriends = [];
    this.users.forEach(x => {
      f.forEach(y => {
        if(x.id === y)
        {
          this.fofriends.push(x);
        }
      })
    })
  }

  ngOnInit() {
  
  }

}
