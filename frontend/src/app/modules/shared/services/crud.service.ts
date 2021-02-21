import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL } from 'src/app/modules/shared/config/webApiPrefix.config';


//TODO: Crear el crud service de tipo ANY de esta manera podriamos tener un unico servicio que se utilizase en todos los ts de los modulos.
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
        return this.http.post<T>(`${this.apiRest}/insert`, item);
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
        return this.http.get<T>(`${this.apiRest}/getOneById/${id}`);
    }

    /**
     * Metodo para actualizar un item concreto en la BD.
     * @param item 
     */
    update(id: String, item: T): Observable<T> {
        return this.http.put<T>(`${this.apiRest}/update/${id}`, item);
    }

    /**
     * Metodo para eliminar un item concreto de la BD.
     * @param id
     */
    delete(itemId: string): Observable<T> {
        return this.http.delete<T>(`${this.apiRest}/delete/${itemId}`);
    }

    userLogin(item: T): Observable<T> {
        return this.http.post<T>(`${this.apiRest}/login/`, item)
    }

    /**
     * Metodo para cambiar la ruta.
     * @param urlPrefix 
     */
    private setUrlPrefix(urlPrefix: string): void {
        this.apiRest = `${BASEURL}/${urlPrefix}`
    }
}