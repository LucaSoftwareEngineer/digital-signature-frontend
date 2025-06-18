import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JsonLogin } from '../../dto/JsonLogin';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  username: string = '';
  password: string = '';

  constructor (private http:HttpClient, private router:Router) {}

  register() {
    if (this.username != '' && this.password != '') {
      const jsonRegister = new JsonLogin(this.username.toString(), this.password.toString());
      this.http.post('http://localhost:8080/api/register',jsonRegister).subscribe(res => {
        this.registerSuccess();
      });
    }
  }

  registerSuccess() {
    alert("ti sei registrato correttamente ora puoi accedere!");
  }

}
