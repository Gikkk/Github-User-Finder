import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  userInput = 'gikkk';
  info = `https://api.github.com/users/${this.userInput}`;
  repo = `https://api.github.com/users/${this.userInput}/repos`;
  followers = `https://api.github.com/users/${this.userInput}/followers`;
  following = `https://api.github.com/users/${this.userInput}/following`;

  onLoadData(){
    this.http.get(this.info)
    .subscribe(responseData =>{
      let info: any = responseData;
      document.querySelector(".account__avatar").innerHTML = `<img src="${info.avatar_url}" class="account__avatar-highlighted" alt="avatar" >`
      document.querySelector(".account__created--highlighted").textContent = `${info.created_at.slice(0, 10)}`;
      document.querySelector(".account__followers--highlighted").textContent = `${info.followers}`;
      document.querySelector(".account__type--highlighted").textContent = `${info.type}`;
      document.querySelector(".account__login--highlighted").textContent = `${info.login}`;
      document.querySelector(".account__username--highlighted").textContent = `${info.name}`;
      document.querySelector(".account__location--highlighted").textContent = `${info.location}`;
      document.querySelector(".account__repo--highlighted").textContent = `${info.public_repos}`;
      document.querySelector(".account__updated--highlighted").textContent = `${info.updated_at.slice(0, 10)}`;
      document.querySelector(".account__url").setAttribute("href", `${info.html_url}`);
      document.querySelector(".account__following--highlighted").textContent = `${info.following}`;
      if(info.name === null){
        document.querySelector(".account__username--highlighted").textContent = 'Not mentioned';
      }
      if(info.location === null){
        document.querySelector(".account__location--highlighted").textContent = 'Not mentioned';
      }
    }, error => {
      document.querySelector('.search__error').textContent = `Search field is empty or user ${error.statusText}`
    })
  }

  getRepo(){
    this.http.get(this.repo)
    .subscribe(responseData =>{
      const repoInfo: any =  responseData;
      const repoContainer = document.querySelector('.repo__container');

      let t = document.querySelector('.main__btn');
      if(t.textContent === "SHOW MORE"){
        t.textContent = "SHOW LESS";
      }else if(t.textContent === "SHOW LESS"){
        t.textContent = "SHOW MORE";
        document.querySelector('.repo__container').classList.toggle('showHide');
      }

      repoInfo.forEach(repo => {
        const repoList = document.createElement('section');
        repoList.classList.add('repo__items')
        repoList.innerHTML = `
          <h2>${repo.name.slice(0, 10)}</h2>
          <p>Main language: ${repo.language}</p>
          <a href="${repo.html_url}" class="repo__btn">More info<a/>`
        repoContainer.appendChild(repoList);
      })
    }, error => {
      console.log(error);
    })
  }

  getFollowers(){
    this.http.get(this.followers)
    .subscribe(responseData =>{
      const followersInfo: any =  responseData;
      const followersContainer = document.querySelector('.followers__container');

      let t = document.querySelector('.followers__btn');
      if(t.textContent === "SHOW MORE"){
        t.textContent = "SHOW LESS";
      }else if(t.textContent === "SHOW LESS"){
        t.textContent = "SHOW MORE";
      }

      followersInfo.forEach(followers => {
        const followersList = document.createElement('section');
        followersList.classList.add('follow__items');
        followersList.innerHTML = `
          <h3 class="follow__header">${followers.login}</h3>
          <img src="${followers.avatar_url}" alt="followers img" class="follow__img">
          <a href="${followers.html_url}" target = "_blanck" class="follow__btn">More info<a/>`
        followersContainer.appendChild(followersList);
      })
    }, error => {
      console.log(error);
    })
  }

  getFollowing(){
    this.http.get(this.following)
    .subscribe(responseData =>{
      const followingInfo: any =  responseData;
      const followingContainer = document.querySelector('.following__container');

      let t = document.querySelector('.following__btn');
      if(t.textContent === "SHOW MORE"){
        t.textContent = "SHOW LESS";
      }else if(t.textContent === "SHOW LESS"){
        t.textContent = "SHOW MORE";
      }

      followingInfo.forEach(following => {
        const followingList = document.createElement('section');
        followingList.classList.add('follow__items');
        followingList.innerHTML = `
          <h3 class="follow__header">${following.login}</h3>
          <img src="${following.avatar_url}" alt="followers img" class="follow__img">
          <a href="${following.html_url}" target = "_blanck" class="follow__btn">More info<a/>`
        followingContainer.appendChild(followingList);
      })
    }, error => {
      console.log(error);
    })
  }

  getUserInput(value){
    this.userInput = value;
    this.info = `https://api.github.com/users/${this.userInput}`;
    this.repo = `https://api.github.com/users/${this.userInput}/repos`;
    this.followers = `https://api.github.com/users/${this.userInput}/followers`;
    this.following = `https://api.github.com/users/${this.userInput}/following`;

    this.onLoadData();
  }

  ngOnInit(){
    this.onLoadData();
  }
}
