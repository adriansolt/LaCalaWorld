import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from './evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) {}

  public getEventos(): Observable<any> {
    return this.http.get('../assets/eventos.json');
  }
}
