import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tabla',
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  num:number = 0;
  tabla: string='';
  constructor(private activatedRoute: ActivatedRoute){
    //Estic esperant que m'enviin un parametre
    this.activatedRoute.paramMap.subscribe( 
      //Una funció fletxa o arrow function
      (parametros: ParamMap)=> {//rep el paràmetre
        //Agafo el parametre 
        this.num=parseInt(parametros.get("num")!);
        
        //Creo la taula de multiplicar 
        this.tabla='';
        for (let i = 0; i < 10; i++) {
          let t:number=i*this.num;
          this.tabla += t + ' - ';
        }
        
      }//end arrow function
    ); //end subscribe
  }//end constructor
}
