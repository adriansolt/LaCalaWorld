import { Component, OnInit } from '@angular/core';
import { Foto } from '../../../foto';
import { ModalComponent } from './modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  fotos: Foto[] = [];

  constructor(private modalService: NgbModal) {
    this.fotos = [
      {
        descripcion : 'Es un sitio divertido interesante para pasar el día con niños de cualquier edad. Lo interesante es ir varias personas para hacer colas en diferentes lugares porque se forman una larga cola de gente para poder montar.',
        fuente : 'twitter',
        nombre : 'mariajesus1213',
        img : 'foto1.jpg'
      },
      {
        descripcion : 'Pasé un domingo estupendo, las entradas las cogimos en promoción por internet y nos salieron muy bien de precio.',
        fuente : 'twitter',
        nombre : 'martadeoro_x',
        img : 'foto2.jpg'
      },
      {
        descripcion : 'Un sitio ideal para escaparte con niños casi todo el año. Aunque algunas fechas está muy masificado, pero si pillas el finde propicio se hace muy ligero.',
        fuente : 'facebook',
        nombre : 'mileniajuancarlos',
        img : 'foto3.jpg'
      },
      {
        descripcion : 'Fantásticas instalaciones. Muy bien cuidadas. El enclave es una maravilla, rodeado por el pulmón de la ciudad. He llevado ahí a mi hija, de pequeña y ahora a mis nietos',
        fuente : 'instagram',
        nombre : 'juan_ramongil66',
        img : 'foto4.jpg'
      },
      {
        descripcion : 'Genial, excelente para pasar un rato con familia o con amigos. Hay atracciones para todas las edades y todos los gustos',
        fuente : 'instagram',
        nombre : 'paolagazal89',
        img : 'foto5.jpg'
      },
      {
        descripcion : 'Me encanta! Nosotros nos sacamos el bono anual por lo que vamos muy a menudo. Para pasar un ratito o el día entero, muchas atracciones, animación por las calles, oferta gastronómica. ',
        fuente : 'facebook',
        nombre : 'violetasanchez_34',
        img : 'foto6.jpg'
      },
      {
        descripcion : 'Para pasarlo bien con la familia o con los amigos. Zonas verdes entre las atracciones, para descansar si tienes ganas y tiempo.',
        fuente : 'facebook',
        nombre : 'rauldiaz56',
        img : 'foto7.jpg'
      },
      {
        descripcion : 'Excelente! Hay atracciones muy fuertes y divertidas. También hay muchos lugares para comer y paisajes increíbles',
        fuente : 'twitter',
        nombre : 'pauladiblasi101',
        img : 'foto8.jpg'
      },
      {
        descripcion : 'Hemos celebrado un cumpleaños en el parque de atracciones y la pasamos genial!! Excelente atención recibida desde que llegamos.',
        fuente : 'instagram',
        nombre : 'aixamunoz_12x',
        img : 'foto9.jpg'
      },
    ]
   }

   open(i: number) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.foto = this.fotos[i];
    modalRef.componentInstance.img = i + 1;
}
  ngOnInit() {
  }

}
