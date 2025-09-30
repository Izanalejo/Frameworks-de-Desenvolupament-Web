import { Component } from '@angular/core';

@Component({
  selector: 'app-compo3',
  imports: [],
  templateUrl: './compo3.component.html',
  styleUrl: './compo3.component.css'
})
export class Compo3Component {
//seccion de atributos
  //nombreVariable:tipo=asignación
  title: string = 'my-app_FDW';
  //Declarando una propiedad = atributo
  name:string; //declarar atribut
  age:number=32; //Declarar atribut i inicialitzar-lo
  numbers:number[] = [3,5,78,125];

  //se puede poner o no el constructor si está vacio
  constructor(){
    this.name = 'Izan Alejo';

  }

  //mètodes

  resultatFinal():number{
    let total:number = 0;
    for(let i = 0; i <= 3; i++){
      total = total + this.numbers[i];
    }
    return total;
  }
}
