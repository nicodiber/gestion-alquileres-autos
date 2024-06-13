import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlquilerService {
    private baseUrl = 'http://localhost:3000/api/alquileres'; // URL del backend

    constructor(private http: HttpClient) { }

    getAllAlquileres(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    getAlquilerById(id: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createAlquiler(alquiler: any): Observable<any> {
        return this.http.post(`${this.baseUrl}`, alquiler);
    }

    updateAlquiler(id: string, alquiler: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, alquiler);
    }

    deleteAlquiler(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}