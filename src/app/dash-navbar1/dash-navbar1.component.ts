import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash-navbar1',
  templateUrl: './dash-navbar1.component.html',
  styleUrls: ['./dash-navbar1.component.css']
})
export class DashNavbar1Component implements OnInit {

  @Input() moral_user: string="";
  @Input() cuenta: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
