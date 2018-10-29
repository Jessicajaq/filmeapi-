import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmeapi } from './filmeapi/filmeapi';
import { HttpClient } from '@angular/common/http';


const URL = "http://localhost:8080/filme";


@Injectable({
  providedIn: 'root'
})

export class FilmeapiService {

  constructor(private http:HttpClient) { }

  getFilmeapi(): Observable<Filmeapi[]>{
    let buscar = "/buscar";
    console.log(URL+buscar);
    return this.http.get<Filmeapi[]>(URL+buscar);
  } 

  salvarFilme(nome:string): Observable<Filmeapi>{
    let inserir = "/filme?title="+nome;    
    console.log(URL+inserir);
    return this.http.get<Filmeapi>(URL+inserir);
  }


}
