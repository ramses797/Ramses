import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modules/login/models/usuarios';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Usuarios;

  constructor(private loginService: LoginService) { 
    this.login = {correo: '', contrasenya: ''};
  }

  ngOnInit(): void {
  }

  entrar() {
    this.loginService.login(this.login);
  }

}
