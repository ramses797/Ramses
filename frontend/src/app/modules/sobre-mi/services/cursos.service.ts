import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { PREFIX } from 'src/app/modules/shared/config/webApiPrefix.config';
import { Cursos } from 'src/app/modules/sobre-mi/models/cursos';

@Injectable({
    providedIn: 'root'
})
export class CursosService extends CrudService<Cursos> {

    constructor(http: HttpClient) {
        super(http);
        this.withUrlPrefix(PREFIX.cursos);
    }

    insertar(item: Cursos): void {
        this.insert(item).subscribe();
    }

    read(): Observable<Cursos[]> {
        return this.get();
    }

    modificar(item: Cursos): void {
        this.update(item._id, item).subscribe();
    }

    eliminar(itemId: string): void {
        this.delete(itemId).subscribe();
    }
}
