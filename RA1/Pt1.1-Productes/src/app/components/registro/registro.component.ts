import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  formRegister=new FormGroup(
    {
        nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
        poblacion: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']{1,40}$")]),
        email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
        dni: new FormControl('', [Validators.required, Validators.pattern("")]),
        codiP: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{5}$")]),
        direccion: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ,.º ª]{1-100}$")]),
        fecha: new FormControl('', [Validators.required, Validators.pattern("")]),
        sexo: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
    }
  )
  submit(): void{
      alert('Registrado con éxito!');
    }
}
