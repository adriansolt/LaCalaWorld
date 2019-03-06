import { Component, OnInit } from '@angular/core';
import { Promocion } from '../../../promocion';
import { PromocionesService } from '../../../promociones.service';

@Component({
  selector: 'app-promociones-list',
  templateUrl: './promociones-list.component.html',
  styleUrls: ['./promociones-list.component.scss']
})
export class PromocionesListComponent implements OnInit {

  promociones: Promocion[] = [];

  constructor(private eventosService: PromocionesService) {}
  ngOnInit() {
    this.eventosService.getPromociones()
      .subscribe(data => {
        this.promociones = data.promociones;
      });
  }

}
