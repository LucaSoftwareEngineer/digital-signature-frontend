import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import SecureLS from 'secure-ls';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  ls = new SecureLS();

  logged = true;

  constructor(private http:HttpClient, private router:Router) {
    setTimeout(() => {
      if (this.ls.get('user')) {
        if (this.logged == false) {
          this.logged = true;
        }
      }
    }, 2000)
    
  }

  ngOnInit(): void {
    
  }

  logout() {
    this.logged = false;
    this.ls.remove('user');
    this.router.navigate(['/login']);
  }

}
