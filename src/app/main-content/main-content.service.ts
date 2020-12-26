import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpService{
  constructor(private http: HttpClient) {}

  info = "https://api.github.com/users/safareli";
  repo = "https://api.github.com/users/safareli/repos";
  followers = "https://api.github.com/users/safareli/followers";
  following = "https://api.github.com/users/safareli/following";

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
      console.log(error);
    })
  }

  getRepo(){
    this.http.get(this.repo)
    .subscribe(responseData =>{
      const repoInfo: any =  responseData;
      const repoContainer = document.querySelector('.repo__container');

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
