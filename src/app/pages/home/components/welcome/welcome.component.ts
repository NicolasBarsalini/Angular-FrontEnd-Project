import { Component } from '@angular/core';
import { User } from '../users/users.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  users: User[] = []
  totalUsers: number
  functions = [
    "Engenheiro de FE",
    "Engenheiro de BE",
    "Analista de dados",
    "Lider Técnico"
  ]

  usersByFunction: { [key: string] : number } = {}

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

    this.totalUsers = this.users.length
    
    this.userByFunction()
  }

  userByFunction() {
    this.functions.forEach(func => {
      let count: number = 0

      this.users.forEach(user => {
        if(user.function == func) {
          count++
        }
      })

      this.usersByFunction[func] = count
    })
  }
}
