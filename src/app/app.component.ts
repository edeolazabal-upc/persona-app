import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Persona } from './model/persona';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'persona-app';
  curso = 'Arquitectura de Aplicaciones Web'
  conectado = false
  usuarios: Array<string> = ['admin', 'user', 'guest']

  nombre: string = ''
  peso: number = 0
  persona: Persona | null = null

  crearPersona() {
    this.persona = new Persona(this.nombre, this.peso)
  }

  caminar() {
    if (this.persona) {
      this.persona.caminar()
    }
  }
  comer() {
    if (this.persona) {
      this.persona.comer()
    }
  }
}
