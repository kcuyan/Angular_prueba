import {Component} from '@angular/core'

@Component({
    selector: 'videojuego',
    templateUrl: 'videojuego.component.html' 
})

export class videojuegoComponent {
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Video Juego"
        console.log('se a cargado correctamente.');
    }
}