import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SucursalService {
    private baseUrl = 'http://localhost:3000/api/sucursales'; // URL del backend

    constructor(private http: HttpClient) { }

    getAllSucursales(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    getSucursalById(id: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createSucursal(sucursal: any): Observable<any> {
        return this.http.post(`${this.baseUrl}`, sucursal);
    }

    updateSucursal(id: string, sucursal: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, sucursal);
    }

    deleteSucursal(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}