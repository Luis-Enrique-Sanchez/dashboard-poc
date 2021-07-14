import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cards:any = []
  cards_loaded = false
  constructor(private session: SessionService) { }

  ngOnInit(): void {
    this.getItems()
  }

  async getItems(){
    this.session.getItems()
      .then((cards: any) => 
      {
        this.cards = cards
        this.cards_loaded = true
      })
  }

}
