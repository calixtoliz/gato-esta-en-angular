import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { LugaresComponent } from './lugares/lugares.component';
import { CuriosidadesComponent } from './curiosidades/curiosidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    InformacionComponent,
    AdopcionComponent,
    LugaresComponent,
    CuriosidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
