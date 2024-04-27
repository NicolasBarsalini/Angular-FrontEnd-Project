import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUserForm: FormGroup;
  functions = [
  "Engenheiro de FE",
  "Engenheiro de BE",
  "Analista de dados",
  "Lider Técnico"
]

  constructor(private router: Router) {
    this.addUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      function: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
    });
  }
  
  onSubmit() {
    console.log("New user added with success!")
    console.log(this.addUserForm.value);

    this.router.navigate(["/app/users"])
  }

}
