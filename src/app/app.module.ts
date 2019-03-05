import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { ParqueComponent } from './components/parque/parque.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HomeModule } from './components/home/home.module';
import { EventosListComponent } from './components/eventos/eventos-list/eventos-list.component';
import { ServiciosListComponent } from './components/servicios/servicios-list/servicios-list.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { GaleriaComponent } from './components/multimedia/galeria/galeria.component';
import { ModalComponent } from './components/multimedia/galeria/modal/modal.component';
import { VisitanosComponent } from './components/visitanos/visitanos.component';
import { EventoDetailComponent } from './components/eventos/evento-detail/evento-detail.component';
import { ServiciosDetailComponent } from './components/servicios/servicios-detail/servicios-detail.component';
import { PromocionesDetailComponent } from './components/visitanos/promociones-detail/promociones-detail.component';
import { PromocionesListComponent } from './components/visitanos/promociones-list/promociones-list.component';
import { EventosService } from './eventos.service';
import { FotosService } from './fotos.service';
import { PromocionesService } from './promociones.service';
import { ServiciosService } from './servicios.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    NavbarComponent,
    FooterComponent,
    InfoComponent,
    ParqueComponent,
    EventosComponent,
    EventosListComponent,
    ServiciosListComponent,
    MultimediaComponent,
    GaleriaComponent,
    ModalComponent,
    VisitanosComponent,
    EventoDetailComponent,
    ServiciosDetailComponent,
    PromocionesDetailComponent,
    PromocionesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  entryComponents: [
    ModalComponent,
  ],
  providers: [EventosService, FotosService, PromocionesService, ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
