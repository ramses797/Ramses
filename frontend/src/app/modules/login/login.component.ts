import { Component } from '@angular/core';
import { Usuarios } from 'src/app/modules/login/models/usuarios';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: Usuarios;

  constructor(private loginService: LoginService) {
    this.login = {correo: '', contrasenya: ''};
  }

  entrar(): void {
    this.loginService.login(this.login);
  }

}
