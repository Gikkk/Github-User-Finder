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
    // this.httpService.onLoadRepo();
  }
  onLoadFollowers(){
    this.httpService.onLoadFollowers();
  }
  onLoadFollowing(){
    this.httpService.onLoadFollowing();
  }


  ngOnInit(){
    this.onLoadData();
    this.onLoadRepo();
    this.onLoadFollowers();
    this.onLoadFollowing();
  }
}


    // const getfollowers = () => {
    //   sendHttpRequest('GET', 'https://api.github.com/users/vaxosv/followers').then(responseData => {
    //     console.log(responseData);
    //     document.getElementById("test10").src = `${responseData[0].avatar_url}`;
    //   });
    // };
    // getfollowers()

    // const getfollowing = () => {
    //   sendHttpRequest('GET', 'https://api.github.com/users/vaxosv/following').then(responseData => {
    //     console.log(responseData);
    //     document.getElementById("test12").src = `${responseData[0].avatar_url}`;
    //   });
    // };
    // getfollowing()
