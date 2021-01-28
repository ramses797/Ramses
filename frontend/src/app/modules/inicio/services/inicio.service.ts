import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from '../../shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Inicio } from 'src/app/modules/inicio/models/inicio';

@Injectable({
    providedIn: 'root'
})

export class InicioService extends CrudService<Inicio>{

    constructor(http: HttpClient) {
        super(http);
        this.withUrlPrefix(PREFIX.inicio);
    }

    insert(item: Inicio): any {
        this.insert(item).subscribe();
    }
    get(): Observable<Inicio[]> {
        return this.get();
    }
    
}