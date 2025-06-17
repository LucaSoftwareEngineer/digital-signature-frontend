import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FirewallService } from '../../services/firewall-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(private firewall:FirewallService, private router:Router) {}

  ngOnInit(): void {
    if (this.firewall.getUserIsLogged() == false) {
      this.router.navigate(['/login']);
    }
  }

  

}
