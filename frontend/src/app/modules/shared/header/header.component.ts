import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public screen;
  constructor() { }

  ngOnInit(): void {
    this.screen = screen.width;
    console.log(this.screen);
  }

}
