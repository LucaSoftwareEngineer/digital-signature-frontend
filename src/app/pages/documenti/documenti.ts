import { Component, OnInit, signal } from '@angular/core';
import { IDocumento } from '../../interfaces/IDocumento';
import { DocumentoService } from '../../services/documento-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documenti',
  imports: [CommonModule],
  templateUrl: './documenti.html',
  styleUrl: './documenti.css'
})
export class Documenti implements OnInit {

  elencoDocumenti = signal<Array<IDocumento>>([]);

  constructor(private documentoService:DocumentoService, router:Router) {}

  ngOnInit(): void {
    this.getDocumenti();
  }

  getDocumenti() {
    this.documentoService.getDocumenti('1').subscribe(res => {
      console.log(res);
      this.elencoDocumenti.set(res);
    })
  }

}
