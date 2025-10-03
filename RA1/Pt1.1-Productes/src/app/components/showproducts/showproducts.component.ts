import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-showproducts',
  imports: [],
  templateUrl: './showproducts.component.html',
  styleUrl: './showproducts.component.css'
})
export class ShowproductsComponent {


  id:number = 0;
  //Esperando parametro
constructor(private activatedRoute: ActivatedRoute){
  this.activatedRoute.paramMap.subscribe(

   (parametros: ParamMap)=>{
        this.id=parseInt(parametros.get("id")!);
        console.log(this.id);
   }

  );
}
}

