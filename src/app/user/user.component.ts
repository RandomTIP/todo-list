import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
let isUserNameUpperCase = false;

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get selectedUserImagePath() {
    return `../../assets/users/${this.selectedUser.avatar}`;
  }

  onUserSelected() {
    if(!isUserNameUpperCase){
      this.selectedUser.name = this.selectedUser.name.toUpperCase();
    }
    else{
      this.selectedUser.name = this.selectedUser.name.toLowerCase();
    }

    isUserNameUpperCase = !isUserNameUpperCase;
  }
}
