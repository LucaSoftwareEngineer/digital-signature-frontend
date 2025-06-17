import { Component, OnInit, signal } from '@angular/core';
import { IDocumento } from '../../interfaces/IDocumento';
import { DocumentoService } from '../../services/documento-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FirewallService } from '../../services/firewall-service';
import SecureLS from 'secure-ls';

@Component({
  selector: 'app-documenti',
  imports: [CommonModule],
  templateUrl: './documenti.html',
  styleUrl: './documenti.css'
})
export class Documenti implements OnInit {

  elencoDocumenti = signal<Array<IDocumento>>([]);
  ls = new SecureLS();

  constructor(private firewall:FirewallService, private documentoService:DocumentoService, private router:Router) {}

  ngOnInit(): void {
    if (this.firewall.getUserIsLogged() == false) {
      this.router.navigate(['/login']);
    }
    this.getDocumenti();
  }

  getDocumenti() {
    this.documentoService.getDocumenti(this.ls.get('user')).subscribe(res => {
      this.elencoDocumenti.set(res);
    })
  }

}
