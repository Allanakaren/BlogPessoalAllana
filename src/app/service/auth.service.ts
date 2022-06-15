import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }


  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoalallanakaren.herokuapp.com/Usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
     return this.http.post<User>('https://blogpessoalallanakaren.herokuapp.com/Usuarios/cadastrar' , user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://blogpessoalallanakaren.herokuapp.com/Usuarios/${id}`, this.token)

  }

  atualizar(Usuarios: User): Observable<User> {
    return this.http.put<User>('https://blogpessoalallanakaren.herokuapp.com/Usuarios/atualizar', Usuarios, this.token)
  }

  logado(){
    let ok: boolean = false
    if(environment.token != ''){
      ok = true
    }
    return ok 
  }
  
}



