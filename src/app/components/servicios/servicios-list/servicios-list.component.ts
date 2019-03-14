import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../../servicio';
import { ServiciosService } from '../../../servicios.service';

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.scss']
})
export class ServiciosListComponent implements OnInit {

  servicios: Servicio[] = [];

  constructor(private serviciosService: ServiciosService) {}
  ngOnInit() {
    this.serviciosService.getServicios()
      .subscribe(data => {
        this.servicios = data.servicios;
      });
  }

}
