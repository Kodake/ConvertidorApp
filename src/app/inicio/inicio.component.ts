import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  cantidad: number = 1;
  tengo: string = 'USD';
  quiero: string = 'EUR';
  total: number = 0;
  monedas: any[] = [
    { name: 'USD', desc: 'US Dólar' },
    { name: 'EUR', desc: 'Euro' },
    { name: 'GBP', desc: 'Libra Esterlina' }
  ]

  constructor() { }

  ngOnInit(): void {
    this.convertir();
  }

  convertir(): void {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.85;
        }
        if (this.quiero === 'GBP') {
          this.total = this.cantidad * 0.77;
        }
        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.18;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'GBP') {
          this.total = this.cantidad * 0.91;
        }
        break;
      case 'GBP':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.30;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 1.10;
        }
        if (this.quiero === 'GBP') {
          this.total = this.cantidad;
        }
        break;
    }
  }

}
