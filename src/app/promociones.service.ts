import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  constructor(private http: HttpClient) {}

  public getPromociones(): Observable<any> {
    return this.http.get('../assets/promociones.json');
  }
}
