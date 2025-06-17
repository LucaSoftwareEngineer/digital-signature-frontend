import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import SecureLS from 'secure-ls';
import { JsonLogin } from '../../dto/JsonLogin';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username:string = '';
  password:string = '';
  jsonLogin = new JsonLogin(this.username, this.password);
  ls = new SecureLS();
  
  constructor (private http:HttpClient, private router:Router) {}

  login() {
    this.http.post('http://localhost:8080/api/login',this.jsonLogin).subscribe(idUtente => {
      if (idUtente != null && idUtente != undefined) {
        this.ls.set('user',idUtente);
        this.router.navigate(['/']);
      }
    });
  }


}
