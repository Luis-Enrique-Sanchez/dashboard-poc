import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  ruta = 'assets/img/pagos.png';
  customer = 'Padma';
  cards =
  [
    {
      ruta: "assets/img/pagos.png",
      titulo: "Pagos"
    },
    {
     ruta: "assets/img/Autorizaciones.png",
     titulo: "Autorizaciones"
    },
    {
     ruta: "assets/img/cuentas.png",
     titulo: "Cuentas"
   },
   {
     ruta: "assets/img/transferencias.png",
     titulo: "Transferencias"
   }     
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
