import { Injectable } from '@angular/core';

export interface Usuario {
  dni: string;
  email: string;
  nombre: string;
  direccion: string;
  codigoP: string;
  fecha: string;
  sexo: string;
  poblacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Usuario[] = [];

  constructor() { }

  addUser(
    dni: string,
    email: string,
    nombre: string,
    direccion: string,
    codigoP: string,
    fecha: string,
    sexo: string,
    poblacion: string
  ){
    this.users.push({
      dni,
      email,
      nombre,
      direccion,
      codigoP,
      fecha,
      sexo,
      poblacion
    });
  }

  // Si quieres validar login, aquí un ejemplo:
  validateUser(email: string, dni: string): boolean {
    return this.users.some(user => user.email === email && user.dni === dni);
  }
}
