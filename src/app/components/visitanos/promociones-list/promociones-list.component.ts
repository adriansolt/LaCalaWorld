import { Component, OnInit } from '@angular/core';
import { Promocion } from '../../../promocion';

@Component({
  selector: 'app-promociones-list',
  templateUrl: './promociones-list.component.html',
  styleUrls: ['./promociones-list.component.scss']
})
export class PromocionesListComponent implements OnInit {

  promociones: Promocion[] = [];
  promocionesList: Promocion[] = [
    {
      titulo: 'PROMO SAN VALENTÍN',
      descripcion: 'Ven el dia de San Valentín acompañado y tendréis un 2x1 en la entrada invidual.',
      img: 'promocion1.jpg'
    },
    {
      titulo: 'PROMO DIA SAN PATRICIO',
      descripcion: 'Si apareces vestido de verde el dia de San Patricio en el parque, te regalamos el Speed Pass con la compra de la entrada individual.',
      img: 'promocion2.jpg'
    },
    {
      titulo: 'PROMO HALLOWEEN',
      descripcion: 'Atrévete a pasar un dia de miedo en La Cala World. Con la compra de una entrada individual, te regalamos otra.',
      img: 'promocion3.jpg'
    }
  ];

  constructor() {
    this.promociones = this.promocionesList;
  }
  ngOnInit() {
  }

}
