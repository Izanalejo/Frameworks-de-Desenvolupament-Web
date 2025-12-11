import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  contadorVisitas: number = 0;

  ngOnInit(): void {
    this.gestionarContadorVisitas();
  }

  gestionarContadorVisitas(): void {
    // Buscar la cookie de visitas
    const cookieVisitas = this.getCookie('contadorVisitas');
    
    if (cookieVisitas) {
      // Si existe la cookie, incrementamos el contador
      this.contadorVisitas = parseInt(cookieVisitas) + 1;
    } else {
      // Si no existe, es la primera visita
      this.contadorVisitas = 1;
    }
    
    // Guardar el nuevo valor en la cookie (30 días de expiración)
    this.setCookie('contadorVisitas', this.contadorVisitas.toString(), 30);
  }

  getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  setCookie(name: string, value: string, days: number): void {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
}