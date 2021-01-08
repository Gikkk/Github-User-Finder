import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  userInput = 'gikkk';
  repo = `https://api.github.com/users/${this.userInput}/repos`;
  followers = `https://api.github.com/users/${this.userInput}/followers`;
  following = `https://api.github.com/users/${this.userInput}/following`;

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


}
