import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent{
  editUserForm: FormGroup;
  user: User;

  functions = [
    "Engenheiro de FE",
    "Engenheiro de BE",
    "Analista de dados",
    "Lider Técnico"
  ]
//n tem como injetar o formulario do adduser aqui e só preenche-lo?
    constructor(private router: Router) {
      this.user = new User();
      this.user.name = "Nicolas";
      this.user.email = "nbarsa@gmail.com";
      this.user.function = this.functions[0];
      this.user.password = "123456";

      this.editUserForm = new FormGroup({
        name: new FormControl(this.user.name || '', Validators.required),
        email: new FormControl(this.user.email || '', [Validators.required, Validators.email]),
        function: new FormControl(this.user.function || ''),
        password: new FormControl(this.user.password || '', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
      });
    }

    onSubmit() {
      this.user.name = this.editUserForm.get('name')?.value;
      this.user.email = this.editUserForm.get('email')?.value;
      this.user.function = this.editUserForm.get('function')?.value;
      this.user.password = this.editUserForm.get('password')?.value;

      alert("User edited!\n" + this.user.to_string());

      console.log("User edited!" + "\n" + this.editUserForm.value + '\n' + this.user.to_string());

      this.router.navigate(["/app/users/"]);
    }
}

class User {
  name?: string;
  email?: string;
  function?: string;
  password?: string;

  to_string() {
    return "Nome: " + this.name + 
            "\nEmail: " + this.email + 
            "\nFuncao: " + this.function + 
            "\nSenha: " + this.password;
  }
};