import { Injectable } from '@angular/core'; //siempre va este Objeto para iyectar
import { Zapatilla } from '../models/zapatilla';
@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('rebook classic',150,'Rebook', 'Blanco', true),
            new Zapatilla('Tiempo',81,'Nike', 'Negro', true),
            new Zapatilla('Predator',50,'Adidas', 'Azul', true),
            new Zapatilla('One',90,'Puma', 'Rojo', true),
            new Zapatilla('New Balance',45,'New Balance', 'verde', false),
            new Zapatilla('rebook classic',75,'Rebook', 'Blanco', true)            
        ];
    }
    getTexto(){
        return "Hola mundo desde un servicio";
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}