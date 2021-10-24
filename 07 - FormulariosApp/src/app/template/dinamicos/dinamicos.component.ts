import { Component } from '@angular/core';

interface Persona{
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Skrow',
    favoritos: [
      {id: 1, nombre: 'Dofus'},
      {id: 2, nombre: 'Metin'}
    ]
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length,
      nombre: this.nuevoJuego
    } 

    this.persona.favoritos.push( { ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  guardar(){
    console.log('guardar click');
  }

  eliminar( index: number ){
    this.persona.favoritos.splice(index, 1);
  }
}
