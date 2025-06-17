import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import SecureLS from 'secure-ls';
import { JsonLogin } from '../../dto/JsonLogin';
import { HttpClient } from '@angular/common/http';
import { Navbar } from '../../components/navbar/navbar';


@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username: string = '';
  password: string = '';
  ls = new SecureLS();
  
  constructor (private http:HttpClient, private router:Router) {}

  login() {
    const jsonLogin = new JsonLogin(this.username.toString(), this.password.toString());
    this.http.post('http://localhost:8080/api/login',jsonLogin).subscribe(idUtente => {
      if (idUtente != null && idUtente != undefined) {
        this.ls.set('user',idUtente);
        this.loginSuccess();
      }
    });
  }

  loginSuccess() {
    this.router.navigate(['/']);
  }


}
