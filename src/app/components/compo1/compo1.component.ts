import { Component } from '@angular/core';
import { Compo2Component } from '../compo2/compo2.component';
import { Compo3Component } from "../compo3/compo3.component";

@Component({
  selector: 'app-compo1',
  imports: [Compo2Component, Compo3Component],
  templateUrl: './compo1.component.html',
  styleUrl: './compo1.component.css'
})
export class Compo1Component {

}
