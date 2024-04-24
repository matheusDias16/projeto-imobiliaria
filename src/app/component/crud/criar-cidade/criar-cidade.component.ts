import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/service/geral.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cidades } from 'src/app/model/cidades/cidades';

@Component({
  selector: 'app-criar-cidade',
  templateUrl: './criar-cidade.component.html',
  styleUrls: ['./criar-cidade.component.scss']
})
export class CriarCidadeComponent implements OnInit {
  formularioTipo: FormGroup;
  cidade:Cidades[] = []
  constructor(
    private api: GeralService
  ) {
    this.formularioTipo = new FormGroup({
      cidade: new FormControl('', [Validators.required]),


    })
  }
  ngOnInit(): void {
  }
  
  criaCidades(): void {
    let novaCidade = new Cidades()
    novaCidade.cidade = this.formularioTipo.value.tipos


    this.api.criarCidade( novaCidade ).subscribe( (data) => {
      alert('Postagem criada!')
    })
  }
}