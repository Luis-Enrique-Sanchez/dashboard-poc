import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cards = 
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
   }     
  ]
  constructor(private session: SessionService) { }

  ngOnInit(): void {
    console.log(this.session.login())
  }

}
