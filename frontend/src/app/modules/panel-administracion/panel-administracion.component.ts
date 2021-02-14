import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-panel-administracion',
  templateUrl: './panel-administracion.component.html',
  styleUrls: ['./panel-administracion.component.scss']
})
export class PanelAdministracionComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  salir() {
    this.loginService.logout();
  }

}
