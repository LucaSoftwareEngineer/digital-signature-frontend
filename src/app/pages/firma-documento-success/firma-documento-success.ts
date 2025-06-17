import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirewallService } from '../../services/firewall-service';

@Component({
  selector: 'app-firma-documento-success',
  imports: [],
  templateUrl: './firma-documento-success.html',
  styleUrl: './firma-documento-success.css'
})
export class FirmaDocumentoSuccess implements OnInit {

  constructor(private firewall:FirewallService, private router:Router) {}

  ngOnInit(): void {
    if (this.firewall.getUserIsLogged() == false) {
      this.router.navigate(['/login']);
    }
  }

}
