import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  mock_cards = 
  [
    {
      ruta: "assets/img/pagos.png",
      titulo: "PAGOS"
    },
    {
     ruta: "assets/img/Autorizaciones.png",
     titulo: "AUTORIZACIONES"
    },
    {
     ruta: "assets/img/cuentas.png",
     titulo: "CUENTAS"
   },
   {
     ruta: "assets/img/transferencias.png",
     titulo: "TRANSFERENCIAS"
   },     
  ]

  constructor() { }

  getItems():any{
    return new Promise((resolve,reject) => {
      setTimeout(() => resolve(this.mock_cards), 2000);
    });
  }
}
