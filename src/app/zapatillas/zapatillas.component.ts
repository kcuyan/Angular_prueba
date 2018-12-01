import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css'],
    providers: [ZapatillaService] // se carga como servicio del componente.
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Zapatillas"
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.mi_marca = 'kevin';
        this.color = 'red';
        this.marcas = new Array();
        
    }

    ngOnInit(){

        this.zapatillas = this._zapatillaService.getZapatillas();// iniciar el servicio
        alert(this._zapatillaService.getTexto());
        this.getmarcas();
    }

    getmarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }  
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index){
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur(){
        console.log("has salido del input");
    }
}