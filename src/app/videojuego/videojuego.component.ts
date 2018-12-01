import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core'

@Component({
    selector: 'videojuego',
    templateUrl: 'videojuego.component.html' 
})

export class videojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Video Juego"
        //console.log('se a cargado correctamente.');
    }

    ngOnInit(){
        //console.log("OnInit ejecutado");
    }

    ngDoCheck(){
       // console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
       // console.log("OnDestroy Ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "nuevo Titulo del Componente";
    }
}