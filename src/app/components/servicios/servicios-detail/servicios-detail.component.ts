import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from '../../../servicio';

@Component({
  selector: 'app-servicios-detail',
  templateUrl: './servicios-detail.component.html',
  styleUrls: ['./servicios-detail.component.scss']
})
export class ServiciosDetailComponent implements OnInit {
  @Input() servicio: Servicio;
  constructor() { }

  ngOnInit() {
  }

}
