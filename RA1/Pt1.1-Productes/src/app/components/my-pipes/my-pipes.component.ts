import { CurrencyPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe],
  templateUrl: './my-pipes.component.html',
  styleUrl: './my-pipes.component.css'
})
export class MyPipesComponent {
  nom: string = 'joan garcia';
  preu:number = 1234.56;
  percentatge:number = 0.25;
  avui:Date = new Date();
  obj:any = { nom: 'Maria', edat: 25};

}
