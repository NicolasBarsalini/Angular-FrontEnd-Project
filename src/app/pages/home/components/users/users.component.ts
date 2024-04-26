import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];
  functions = [
    "Engenheiro de FE",
    "Engenheiro de BE",
    "Analista de dados",
    "Lider Técnico"
  ]

  constructor(private router: Router) {
    this.users.push(
      {
        name: "John",
        email: "john@gmail.com",
        function: this.functions[0]
      },
      {
        name: "Nicolas",
        email: "nicolas@gmail.com",
        function: this.functions[1]
      },
      {
        name: "Ronaldo",
        email: "ronaldojogamuito@gmail.com",
        function: this.functions[0]
      }
    )
  }

  removed(user: User) {
    const index = this.users.indexOf(user);
    
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  edit() {
    this.router.navigate(['/app/edit-user'])
  }

}

class User {
  name?: string;
  email?: string;
  function?: string;
  removed?: boolean;
};