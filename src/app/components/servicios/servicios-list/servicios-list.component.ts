import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../../servicio';
import { PromocionesService } from 'src/app/promociones.service';

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.scss']
})
export class ServiciosListComponent implements OnInit {

  servicios: Servicio[] = [];

  constructor(private eventosService: PromocionesService) {}
  ngOnInit() {
    this.eventosService.getPromociones()
      .subscribe(data => {
        this.servicios = data.servicios;
      });
  }

}
