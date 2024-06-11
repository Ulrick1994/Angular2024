import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListadoComponent } from './carrito/components/listado/listado.component';
import { ProductoComponent } from './carrito/components/producto/producto.component';
import { AgregarProdComponent } from './carrito/components/agregar-prod/agregar-prod.component';
import { MainCarComponent } from './carrito/pages/main-car/main-car.component';
import { FooterComponent } from './carrito/components/footer/footer.component';
import { HeaderComponent } from './carrito/components/header/header.component';
import { AgregarProvComponent } from './proveedor/components/agregar-prov/agregar-prov.component';
import { ListadoProvComponent } from './proveedor/components/listado-prov/listado-prov.component';
import { MainProvComponent } from './proveedor/pages/main-prov/main-prov.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListadoComponent,
    ProductoComponent,
    AgregarProdComponent,
    MainCarComponent,
    AgregarProvComponent,
    ListadoProvComponent,
    MainProvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
