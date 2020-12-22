import { Component, OnInit } from '@angular/core';

import { HttpService} from './main-content.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  // first data
  onLoadData() {
    this.httpService.onLoadData();
  }
  onLoadRepo(){
    this.httpService.onLoadRepo();
  }
  onLoadFollowers(){
    this.httpService.onLoadFollowers();
  }
  onLoadFollowing(){
    this.httpService.onLoadFollowing();
  }


  ngOnInit(){
    this.onLoadData();
  }
}
