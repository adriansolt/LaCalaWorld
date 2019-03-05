import { Component, OnInit } from '@angular/core';
import { Foto } from '../../../foto';
import { ModalComponent } from './modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FotosService } from 'src/app/fotos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  fotos: Foto[] = [];

  constructor(private modalService: NgbModal, private eventosService: FotosService) {}
   ngOnInit() {
     this.eventosService.getFotos().subscribe(data => {
       this.fotos = data['fotos'];
     });
   }
   open(i: number) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.foto = this.fotos[i];
    modalRef.componentInstance.img = i + 1;
}

}
