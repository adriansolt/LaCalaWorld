import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Foto } from '../../../../foto';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() foto: Foto;
  @Input() img;

    constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
