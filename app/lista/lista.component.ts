import { Component, OnInit } from '@angular/core';
import {Ingrediente} from "./ingrediente"

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista:Array<{ingrediente:string}> = []

  constructor() {
    /*
    this.lista.push({ingrediente: "Arroz"})
    this.lista.push({ingrediente: "Culantro"})
    this.lista.push({ingrediente: "Cebolla"})
    this.lista.push({ingrediente: "Pollo"})
    */

    this.lista.push(new Ingrediente("Arroz"))
    this.lista.push(new Ingrediente("Culantro"))
    this.lista.push(new Ingrediente("Cebolla"))
    this.lista.push(new Ingrediente("Pollo"))
  }

  agregar(data: {ingrediente:string}){
      this.lista.unshift(data)
  }

  ngOnInit() {
  }

}
