import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Usuarios } from 'src/app/modules/login/models/usuarios';

@Injectable({
    providedIn: 'root'
})
export class LoginService extends CrudService<Usuarios> {
    respuesta: boolean = false;

    constructor(http: HttpClient) {
        super(http);
        this.withUrlPrefix(PREFIX.usuarios);
    }

    login(objeto: Usuarios): void {
        this.userLogin(objeto).subscribe((res) => {
            localStorage.setItem('usuario', res.usuario.correo);
            this.respuesta = res.message;
            if (res.message === true) {
                location.href = 'panelAdministracionInicio';
            }
        });
    }

    logout() {
        localStorage.removeItem('usuario');
        location.href = 'inicio';
    }
}