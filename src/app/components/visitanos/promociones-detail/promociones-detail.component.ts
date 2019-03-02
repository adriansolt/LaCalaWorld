import { Component, OnInit, Input } from '@angular/core';
import { Promocion } from '../../../promocion';

@Component({
  selector: 'app-promociones-detail',
  templateUrl: './promociones-detail.component.html',
  styleUrls: ['./promociones-detail.component.scss']
})
export class PromocionesDetailComponent implements OnInit {

  @Input() promocion: Promocion;

  constructor() { }
  ngOnInit() {
  }

}
