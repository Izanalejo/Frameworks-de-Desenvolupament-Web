import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  estaLogueado: boolean = false;

  ngOnInit(): void {
    this.verificarSesion();
  }

  verificarSesion(): void {
    // Verificar si existe la localStorage
    const usuario = localStorage.getItem('usuarioLogueado');
    this.estaLogueado = usuario !== null;
    console.log('¿Usuario logueado?', this.estaLogueado); // Para debug
  }

  logout(): void {
    // Eliminar la localStorage
    localStorage.removeItem('usuarioLogueado');
    alert('Has cerrado sesión. La página se actualizará automáticamente.');
    // La página necesita recargarse para ver el cambio
    window.location.reload();
  }
}