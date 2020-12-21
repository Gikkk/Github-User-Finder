import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpService{
  constructor(private http: HttpClient) {}

  data = "https://api.github.com/users/vaxosv";
  repo = "https://api.github.com/users/vaxosv/repos";
  followers = "https://api.github.com/users/vaxosv/followers";
  following = "https://api.github.com/users/vaxosv/following";

  onLoadData(){
    this.http.get(this.data)
    .subscribe(responseData =>{
      // document.querySelector(".account__avatar").src = `${responseData.avatar_url}`;
      // document.querySelector(".account__created").textContent = `created: ${responseData.created_at}`;
      // document.querySelector(".account__followers").textContent = `followers: ${responseData.followers}`;
      // document.querySelector(".account__type").textContent = `type: ${responseData.type}`;
      // document.querySelector(".account__login").textContent = `login: ${responseData.login}`;
      // document.querySelector(".account__name").textContent = `name: ${responseData.name}`;
      // document.querySelector(".account__location").textContent = `Location: ${responseData.location}`;
      // document.querySelector(".account__repo").textContent = `repositories: ${responseData.public_repos}`;
      // document.querySelector(".account__repo").textContent = `repositories: ${responseData.public_repos}`;
      // document.querySelector(".account__updated").textContent = `update time: ${responseData.updated_at}`;
      // document.querySelector(".account__url").setAttribute("href", `${responseData.html_url}`);
      // document.querySelector(".account__following").textContent = `following: ${responseData.following}`;
    }, error => {
      console.log(error);
    })
  }

  onLoadRepo(){
    this.http.get(this.repo)
    .subscribe(responseData =>{
      const repoInfo: any =  responseData;
      const repoContainer = document.querySelector('.repo__container');

      repoInfo.forEach(repo => {
        const repoList = document.createElement('section');
        repoList.innerHTML = `
          <h2 class="">${repo.name}</h2>
          <a href="">${repo.html_url}<a/>`
        repoContainer.appendChild(repoList);
      })
    }, error => {
      console.log(error);
    })
  }

  onLoadFollowers(){
    this.http.get(this.followers)
    .subscribe(responseData =>{
      console.log(responseData);
      const followersInfo: any =  responseData;
      const followersContainer = document.querySelector('.repo__container');

      followersInfo.forEach(followers => {
        const followersList = document.createElement('section');
        followersList.innerHTML = `
          <h2 class="">${followers.name}</h2>
          <a href="">${followers.avatar_url}<a/>`
        followersContainer.appendChild(followersList);
      })
    }, error => {
      console.log(error);
    })
  }

  onLoadFollowing(){
    this.http.get(this.following)
    .subscribe(responseData =>{
      console.log(responseData);
    }, error => {
      console.log(error);
    })
  }

}
