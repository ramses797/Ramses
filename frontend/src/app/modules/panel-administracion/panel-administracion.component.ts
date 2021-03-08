import { Component } from '@angular/core';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-panel-administracion',
  templateUrl: './panel-administracion.component.html',
  styleUrls: ['./panel-administracion.component.scss']
})
export class PanelAdministracionComponent {

  constructor(private loginService: LoginService) { }

  salir(): void {
    this.loginService.logout();
  }

}
