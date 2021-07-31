import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
@Input()  darkMode = true; //Man kann es von außen auf false oder true setzen, indem man es importiert
  constructor() { }

  ngOnInit(): void {
  }

}
