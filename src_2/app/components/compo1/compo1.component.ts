//Javascript puro y duro
import { Component } from '@angular/core';
import { Compo2Component } from '../compo2/compo2.component';

//angular
@Component({
  selector: 'app-compo1',
  imports: [Compo2Component],
  templateUrl: './compo1.component.html',
  styleUrl: './compo1.component.css'
})
export class Compo1Component {

}
