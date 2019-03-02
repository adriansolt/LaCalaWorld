import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../evento';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.scss']
})
export class EventosListComponent implements OnInit {
  eventos: Evento[] = [];
  eventosList: Evento[] = [
  {
      titulo: 'Fiesta La Cala World',
      descripcion: 'El espectáculo perfecto para despedir un día inolvidable',
      dia: 'Todos los dias',
      hora: '17:30',
      img: 'evento1.jpg'
    },
    {
      titulo: 'La Cala World Parade',
      descripcion: 'El mayor desfile de La Cala World se celebra. ¿Te sumas a todos nuestros artistas?',
      dia: 'Todos los dias',
      hora: '12:00',
      img: 'evento2.jpg'
    },
    {
      titulo: 'Aves del Paraíso',
      descripcion: 'Uno de los espectáculos más insólitos y didácticos de La Cala World que tiene a loros, guacamayos y otras aves exóticas de distintos continentes del mundo como protagonistas.',
      hora: '13:00',
      dia: '12/5/2020',
      img: 'evento3.jpg'
    },
    {
      titulo: 'Dino Escape 4-D Experience',
      descripcion: 'Emoción, escalofríos y un sinfín de risas. ¡Prepárate para un viaje colosal y atrévete a adentrarte en una trepidante aventura en el mundo de los dinosaurios!',
      dia: '13/5/2020',
      hora: '13:00',
      img: 'evento4.jpg'
    },
    {
      titulo: 'Pareos en Bora Bora',
      descripcion: 'Aprovecha el momento de descanso en uno de los restaurantes de Polynesia, Bora Bora, para conocer los bailes y los ritmos musicales tradicionales de Polinesia.',
      dia: '14/5/2020',
      hora: '13:00',
      img: 'evento5.jpg'
    },
    {
      titulo: 'Noches de Fuego en Tahití',
      descripcion: 'En la pequeña playa de Polynesia, se lleva a cabo un ritual polinesio para invocar a los dioses. ¿Te lo vas a perder?',
      dia: '15/5/2020',
      hora: '13:00',
      img: 'evento6.jpg'
    },
    {
      titulo: 'Aloha Tahití',
      descripcion: 'En la pequeña playa de Polynesia, se lleva a cabo un ritual polinesio para invocar a los dioses. ¿Te lo vas a perder?',
      dia: '16/5/2020',
      hora: '13:00',
      img: 'evento7.jpg'
    },
    {
      titulo: 'Bubblebou',
      descripcion: 'El mejor alquimista chino vuelve a La Cala World para sorprender con nuevos trucos en forma de pompas de jabón.',
      dia: '17/5/2020',
      hora: '13:00',
      img: 'evento8.jpg'
    },
    {
      titulo: 'Dance Revolution 2',
      descripcion: 'El Gran Teatro Imperial de China reinventa su cartelera con un nuevo espectáculo lleno de música, ritmo y color.',
      dia: '18/5/2020',
      hora: '13:00',
      img: 'evento9.jpg'
    },
    {
      titulo: 'SésamoAventura\'s Time Machine',
      descripcion: 'Acércate con tus hijos al mundo de SésamoAventura y deja que bailen al ritmo de las canciones que cantan los personajes más famosos de este barrio.',
      dia: '19/5/2020',
      hora: '13:00',
      img: 'evento10.jpg'
    },
    {
      titulo: 'Rituales Mexicanos',
      descripcion: 'La Cantina de México te sorprenderá no solo por sus sabores sino por sus bailes, canciones y rituales mexicanos para disfrutar de una comida entretenida y animada. La tradición y modernidad mayas se juntan en este nuevo espectáculo para mostrarte su fuerza y belleza ancestral en nuestros días.',
      dia: '20/5/2020',
      hora: '13:00',
      img: 'evento11.jpg'
    },
    {
      titulo: 'Las Aventuras de Tadeo Jones',
      descripcion: '¡Disfruta con las aventuras del intrépido Tadeo Jones y sus fieles compañeros! ¿Conseguirá salvar a Sara y evitar que el villano se haga con el poder?',
      dia: '21/5/2020',
      hora: '13:00',
      img: 'evento12.jpg'
    },
    {
      titulo: 'Sesame Street Show',
      descripcion: 'No te pierdas a tus amigos de Barrio Sésamo en un divertido espectáculo lleno de alegría para los más pequeños.',
      dia: '22/5/2020',
      hora: '13:00',
      img: 'evento13.jpg'
    },
    {
      titulo: 'Templo del Fuego',
      descripcion: 'México esconde grandes tesoros y nuestro arqueólogo quiere encontrarlos. ¿Qué sorpresas le depararán al entrar en el viejo templo?',
      dia: '23/5/2020',
      hora: '13:00',
      img: 'evento14.jpg'
    },
    {
      titulo: 'West Show',
      descripcion: '¡Diversión asegurada en un espectáculo con un cantante en directo donde podrás interactuar y formar parte del show!',
      dia: '24/5/2020',
      hora: '13:00',
      img: 'evento15.jpg'
    },
    {
      titulo: 'Bang Bang West',
      descripcion: 'En Far West, los robos están a la orden del día. ¿Serán capaces los villanos de entrar en el fuerte y salirse con la suya?',
      dia: '25/5/2020',
      hora: '13:00',
      img: 'evento16.jpg'
    },
    {
      titulo: 'Can Can Show',
      descripcion: 'Acción, ritmo, diversión y humor te esperan en el viejo Saloon de Far West.',
      dia: '26/5/2020',
      hora: '13:00',
      img: 'evento17.jpg'
    },
    {
      titulo: 'Horror in Texas',
      descripcion: 'Amante del miedo y la diversión, por solo 5 € adéntrate en el ambiente más tétrico de Far West: un inhóspito pasaje repleto de sustos, tinieblas y tenebrosos personajes.',
      dia: '27/5/2020',
      hora: '13:00',
      img: 'evento18.jpg'
    },
  ]

  constructor() {
    this.eventos = this.eventosList;
   }
  ngOnInit() {
  }

}
