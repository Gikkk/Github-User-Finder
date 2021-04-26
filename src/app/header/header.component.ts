import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  header = "Github User Finder";

  scrollBack(): void {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

}
