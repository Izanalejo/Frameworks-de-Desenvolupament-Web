import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //seccion de atributos de la clase AppComponent
  //nombreVariable:tipo=asignacion
  title:string;//declarat un atribut i inicialitzat
  name:string;//declarat un atribut
  age:number;//declarat un atribut i inicialitzat
  numbers:number[];
  counter:number;
  //se puede poner o no el constructor si está vacío
  constructor(){
    this.title='DAW2'
    this.name='gatos';//inicialitzat
    this.age=68;
    this.numbers=[23,52,45,2];
    this.counter=1;

  }

  //mètodes
  resultatfinal():number{
    let total:number=0;
    for(let i:number=0;i<=3;i++){
        total +=this.numbers[i];
    }
    return total;
  }

  incrementa():void{
   this.counter++;
  }

  decrementa():void{
    this.counter--;
  }

  generarNombre():number{
    return Math.floor(Math.random()*3)+1;//rango del 1 al 3
  }

}
