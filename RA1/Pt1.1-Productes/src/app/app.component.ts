import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { LlistaProductesComponent } from "./components/llista-productes/llista-productes.component";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LlistaProductesComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pt1.1_IzanAlejo';
}
