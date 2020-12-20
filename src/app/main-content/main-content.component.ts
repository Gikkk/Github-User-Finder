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
    this.onLoadRepo();
    this.onLoadFollowers();
    this.onLoadFollowing();
  }
}


    // // Getting data
    // const getData = () => {
    //   sendHttpRequest('GET', 'https://api.github.com/users/vaxosv').then(responseData => {
    //     document.getElementById("test").src = `${responseData.avatar_url}`;
    //     document.getElementById("test1").textContent = `created: ${responseData.created_at}`;
    //     document.getElementById("test2").textContent = `followers: ${responseData.followers}`;
    //     document.getElementById("test3").textContent = `type: ${responseData.type}`;
    //     document.getElementById("test4").textContent = `login: ${responseData.login}`;
    //     document.getElementById("test5").textContent = `name: ${responseData.name}`;
    //     document.getElementById("test6").textContent = `Location: ${responseData.location}`;
    //     document.getElementById("test7").textContent = `repositories: ${responseData.public_repos}`;
    //     document.getElementById("test8").textContent = `update time: ${responseData.updated_at}`;
    //     document.getElementById("test9").setAttribute("href", `${responseData.html_url}`);
    //     document.getElementById("test11").textContent = `following: ${responseData.following}`;
    //     // let input = document.getElementById("test1").nodeValue;
    //     // console.log(input);
    //   });
    // };
    // getData()

    // const getrep = () => {
    //   sendHttpRequest('GET', 'https://api.github.com/users/vaxosv/repos').then(responseData => {
    //     console.log(responseData);
    //     document.getElementById("test13").textContent = `reposit name: ${responseData[0].name}`;
    //     document.getElementById("test14").setAttribute("href", `${responseData[0].html_url}`);
    //   });
    // };
    // getrep()

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
