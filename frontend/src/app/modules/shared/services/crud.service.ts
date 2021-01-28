import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL } from 'src/app/modules/shared/config/webApiPrefix.config';

@Injectable()

export class CrudService<T> {
    apiRest: String;

    constructor(private http: HttpClient){}

    /**
     * Metod para definir automaticamente la ruta del servidor.
     * @param urlPrefix 
     */
    withUrlPrefix(urlPrefix: string): void {
        this.setUrlPrefix(urlPrefix);
    }

    /**
     * Metodo para insertar en la BD.
     * @param item 
     */
    insert(item: T): Observable<T> {
        return this.http.post<T>(`${this.apiRest}/create`, item);
    }

    /**
     * Metodo para leer de la BD.
     */
    get(): Observable<T[]> {
        return this.http.get<T[]>(`${this.apiRest}/get`);
    }

    /**
     * Metodo para leer un objeto concreto de la BD.
     * @param id
     */
    getById(id: string): Observable<T> {
        return this.http.get<T>(`${this.apiRest}/read/${id}`);
    }

    /**
     * Metodo para actualizar un item concreto en la BD.
     * @param item 
     */
    update(item: T): Observable<T> {
        return this.http.put<T>(`${this.apiRest}/update`, item);
    }

    /**
     * Metodo para eliminar un item concreto de la BD.
     * @param id
     */
    delete(id: T): Observable<T> {
        return this.http.delete<T>(`${this.apiRest}/delete`, id);
    }

    /**
     * Metodo para cambiar la ruta.
     * @param urlPrefix 
     */
    private setUrlPrefix(urlPrefix: string): void {
        this.apiRest = `${BASEURL}/${urlPrefix}`
    }
}