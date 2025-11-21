import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private usersService: UsersService){}

  formRegister = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    poblacion: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']{1,40}$")]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
    ]),
    dni: new FormControl('', Validators.required),
    codiP: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{5}$")]),
    direccion: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9 ,.ºª]{1,100}$")
    ]),
    fecha: new FormControl('', Validators.required),
    sexo: new FormControl('', [
      Validators.required,
      Validators.pattern("^(Masculino|Femenino|Otro)$")
    ]),
  });

  submit(): void {
    if (this.formRegister.valid) {

      const dni = this.formRegister.get('dni')?.value as string;
      const email = this.formRegister.get('email')?.value as string;
      const nombre = this.formRegister.get('nombre')?.value as string;
      const direccion = this.formRegister.get('direccion')?.value as string;
      const codigoP = this.formRegister.get('codiP')?.value as string;
      const fecha = this.formRegister.get('fecha')?.value as string;
      const sexo = this.formRegister.get('sexo')?.value as string;
      const poblacion = this.formRegister.get('poblacion')?.value as string;

      this.usersService.addUser(
        dni, email, nombre, direccion, codigoP, fecha, sexo, poblacion
      );

      alert('Formulario enviado con éxito!');
    }
  }
}
