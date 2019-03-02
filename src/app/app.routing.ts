
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ParqueComponent } from './components/parque/parque.component';
import { InfoComponent } from './components/info/info.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { VisitanosComponent } from './components/visitanos/visitanos.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'servicios',          component: ServiciosComponent },
    { path: 'parque',          component: ParqueComponent },
    { path: 'info',          component: InfoComponent },
    { path: 'multimedia',          component: MultimediaComponent },
    { path: 'visitanos',          component: VisitanosComponent },
    { path: 'eventos',          component: EventosComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
