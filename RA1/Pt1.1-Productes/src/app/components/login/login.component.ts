import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contrasenya: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
  });
 //Creació de Local Storage
  submit(): void {
    if (this.formLogin.valid) {
      // Crear localStorage cuando el login es exitoso
      const usuario = {
        nombre: this.formLogin.get('nombre')?.value,
        email: this.formLogin.get('email')?.value
      };
      
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
      
      alert('Login exitoso! Actualiza la página para ver los cambios en el menú.');
    } else {
      alert('Por favor, completa correctamente todos los campos.');
    }
  }
}