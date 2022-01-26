import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad: number = 0;
  tengo: string = 'USD';
  quiero: string = 'EUR';
  total: number = 0
  monedas: string[] = ['USD', 'EUR', 'LIB']

  constructor() { }

  ngOnInit(): void {
  }
  
  convertir() : void{
    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        else if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.84;
        }
        else{
          this.total = this.cantidad * 0.75
        }

        break;
      case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.2;
        }
        else if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        else{
          this.total = this.cantidad * 0.9
        }
        break;
      case 'LIB':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.33;
        }
        else if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.11;
        }
        else{
          this.total = this.cantidad;
        }
        break;
      default:
        break;
    }
  }
}
