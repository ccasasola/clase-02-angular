import { Component, OnInit } from '@angular/core';
import { Persona } from "./persona";

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  personas:Persona[] = []
  
  constructor() {
      this.personas.push(new Persona("Sergio", "America"))
      this.personas.push(new Persona("Carmen", "Africa"))
      this.personas.push(new Persona("Saul", "Asia"))
      this.personas.push(new Persona("Luis", "Europa"))
  }

  ngOnInit() {
  }

}
