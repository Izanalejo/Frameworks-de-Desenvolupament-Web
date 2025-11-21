import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { MyPipesComponent } from "./components/my-pipes/my-pipes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, MyPipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pt1.1_IzanAlejo';
}
