import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../evento';
import { EventosService } from '../../../eventos.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.scss']
})
export class EventosListComponent implements OnInit {
  eventos: Evento[] = [];
  constructor(private eventosService: EventosService) {}
  ngOnInit() {
    this.eventosService.getEventos()
      .subscribe(data => {
        this.eventos = data.eventos;
      });
  }

}
