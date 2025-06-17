import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirewallService } from '../../services/firewall-service';
import SecureLS from 'secure-ls';

@Component({
  selector: 'app-firma-documento',
  imports: [CommonModule, FormsModule],
  templateUrl: './firma-documento.html',
  styleUrl: './firma-documento.css'
})
export class FirmaDocumento implements OnInit {

  titolo:string = '';
  file:File | null = null;
  firma:string = '';
  ls = new SecureLS();
  
  warning_titolo:Boolean = false;
  warning_file:Boolean = false;
  warning_firma:Boolean = false;

  constructor(private firewall:FirewallService, private http:HttpClient, private router:Router) {}

  ngOnInit(): void {
    if (this.firewall.getUserIsLogged() == false) {
      this.router.navigate(['/login']);
    }
  }

  fileSelezionato(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  inviaFilePerFirma() {
    const formData = new FormData();

    let nWarn = 0;
    this.warning_titolo = false;
    this.warning_file = false;
    this.warning_firma = false;

    if (this.titolo == '') {
      nWarn++;
      this.warning_titolo = true;
    }

    if (this.firma == '') {
      nWarn++;
      this.warning_firma = true;
    }

    if (this.file && nWarn == 0) {
      formData.append('titolo', this.titolo);
      formData.append('file', this.file, this.file.name);
      formData.append('firma', this.firma);
      formData.append('idUtente', this.ls.get('user'));
      this.http.post<Boolean>('http://localhost:8080/api/documento/firma', formData).subscribe(
        res => {
          this.router.navigate(['/firma/documento/success']);
        }
      );
    } else {
      this.warning_file = true;
    }
  }

}
