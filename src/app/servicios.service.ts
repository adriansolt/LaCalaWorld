import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) {}

  public getServicios(): Observable<any> {
    return this.http.get('../assets/servicios.json');
  }
}
