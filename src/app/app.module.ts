import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Importo o Modulo de Formulário do Angular (ngModel)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { InternaComponent } from './component/interna/interna.component';
import { BuscaComponent } from './component/busca/busca.component';
import { ImoveisComponent } from './component/crud/imoveis/imoveis.component';
import { CreateComponent } from './component/crud/create/create.component';
import { CriarTiposComponent } from './component/crud/criar-tipos/criar-tipos.component';
import { CriarCidadeComponent } from './component/crud/criar-cidade/criar-cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternaComponent,
    BuscaComponent,
    ImoveisComponent,
    CreateComponent,
    CriarTiposComponent,
    CriarCidadeComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
