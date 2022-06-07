import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';




@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogpessoalallanakaren.herokuapp.com/temas', this.token)

  }

  PostTema(tema: Tema): Observable<Tema>{
     return this.http.post<Tema>('https://blogpessoalallanakaren.herokuapp.com/temas', tema, this.token)

  }
}
