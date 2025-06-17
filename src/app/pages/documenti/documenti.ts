import { Component, OnInit, signal } from '@angular/core';
import { IDocumento } from '../../interfaces/IDocumento';
import { DocumentoService } from '../../services/documento-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FirewallService } from '../../services/firewall-service';

@Component({
  selector: 'app-documenti',
  imports: [CommonModule],
  templateUrl: './documenti.html',
  styleUrl: './documenti.css'
})
export class Documenti implements OnInit {

  elencoDocumenti = signal<Array<IDocumento>>([]);

  constructor(private firewall:FirewallService, private documentoService:DocumentoService, private router:Router) {}

  ngOnInit(): void {
    if (this.firewall.getUserIsLogged() == false) {
      this.router.navigate(['/login']);
    }
    this.getDocumenti();
  }

  getDocumenti() {
    this.documentoService.getDocumenti('1').subscribe(res => {
      console.log(res);
      this.elencoDocumenti.set(res);
    })
  }

}
