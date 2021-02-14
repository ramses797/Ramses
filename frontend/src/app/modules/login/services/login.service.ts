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

    constructor(http: HttpClient) {
        super(http);
        this.withUrlPrefix(PREFIX.usuarios);
    }

    login(objeto: Usuarios) {
        this.userLogin(objeto).subscribe((res) => {
            if(res.message == true) {
                location.href = 'panelAdministracionInicio'
            }
        });
    }
}