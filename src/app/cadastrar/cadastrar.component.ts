import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string
  alerta: any;

  constructor(
    private authService: AuthService,
    private router: Router  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value

  }
  tipoUser(event: any){
this.tipoUsuario = event.target.value
  }
  cadastrar(){
  this.user.tipo = this.tipoUsuario

  if(this.user.senha != this.confirmarSenha){
     alert('A senhas estão incorretas.')
  } else{
    this.authService.cadastrar(this.user).subscribe((resp: User)=> {
      this.user = resp
      this.router.navigate(['/entrar'])
      this.alerta.showAlertSuccess('Usuário cadastrado com sucesso!')
    })
  }

  }

}
