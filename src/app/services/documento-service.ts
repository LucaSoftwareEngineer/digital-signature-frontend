import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDocumento } from '../interfaces/IDocumento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(private http:HttpClient) { }

  getDocumenti(id:string):Observable<Array<IDocumento>> {
    return this.http.get<Array<IDocumento>>('http://localhost:8080/api/elenco/documenti?idUtente='+id);
  }
  
}
