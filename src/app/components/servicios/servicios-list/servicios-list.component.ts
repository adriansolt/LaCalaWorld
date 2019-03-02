import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../../servicio';

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.scss']
})
export class ServiciosListComponent implements OnInit {

  servicios: Servicio[] = [];
  serviciosList: Servicio[] = [
    {
      titulo: 'CERVECERÍA ANDALUCÍA',
      descripcion: 'Taberna Andaluza y terraza donde degustar productos típicos de Andalucía.',
      img: 'restaurante1.jpg'
    },
    {
      titulo: 'PIZZERIA CAPRI',
      descripcion: 'Diviértete como un pirata mientras degustas la típica comida italiana en nuestro restaurante Capri.',
      img: 'restaurante2.jpg'
    },
    {
      titulo: 'PAGODA CHINA - EL DRAGON DE ORO',
      descripcion: 'Disfrute la experiencia de comer en una autentica Pagoda China, una edificación, todo un emblema clásico de La Cala World.',
      img: 'restaurante3.jpg'
    },
    {
      titulo: 'AMERICAN REST',
      descripcion: 'Hamburguesas, sandwiches y postres américanos servidos por nuestro personal tal y como lo hacen en los restaurantes de California',
      img: 'restaurante4.jpg'
    },
    {
      titulo: 'LOS MANTELES',
      descripcion: 'Destacado por ofrecer exquisitos platos de la cocina árabe. En el 2010 fuimos reconocidos con el primer premio al mejor cous cous de Málaga.',
      img: 'restaurante5.jpg'
    },
    {
      titulo: 'SPEEDY MEXICAN',
      descripcion: 'Entre las deliciosas pizzas inconfundibles y la mejor comida mexicana de la costa, han hecho de Speedy Mexican una referencia de buena comida y buen trato.',
      img: 'restaurante6.jpg'
    },
  ];
  constructor() {
    this.servicios = this.serviciosList;
  }

  ngOnInit() {
  }

}
