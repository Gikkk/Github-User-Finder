import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserInputService } from '../user-input.service';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private service: UserInputService,
    private renderer:Renderer2,
    ){
  }
  @ViewChild('repoContainer', { static: false }) repoContainer: ElementRef;

  ngOnInit(): void {
  }

  disableBtn = false;
  actionMethod($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
  }

  getRepo(){
    this.http.get(this.service.repo)
    .subscribe(responseData =>{
      const repoInfo: any =  responseData;
      const repoContainer = this.repoContainer.nativeElement;

      repoInfo.forEach(repo => {
        const repoList = this.renderer.createElement('section');
        this.renderer.addClass(repoList, 'repo__items');
        this.renderer.addClass(repoList, 'removable');
        repoList.innerHTML = `
          <h2>${repo.name.slice(0, 10)}</h2>
          <p>Main language: ${repo.language}</p>
          <a href="${repo.html_url}" class="repo__btn" target="_blank">More info<a/>`
        this.renderer.appendChild(repoContainer, repoList);
      })
    }, error => {
      console.log(error);
    })
  }

  getFollowers(){
    this.http.get(this.service.followers)
    .subscribe(responseData =>{
      const followersInfo: any =  responseData;
      const followersContainer = document.querySelector('.followers__container');

      followersInfo.forEach(followers => {
        const followersList = this.renderer.createElement('section');
        this.renderer.addClass(followersList, 'follow__items');
        this.renderer.addClass(followersList, 'removable');
        followersList.innerHTML = `
          <h3 class="follow__header">${followers.login}</h3>
          <img src="${followers.avatar_url}" alt="followers img" class="follow__img">
          <a href="${followers.html_url}" target="_blank" class="follow__btn">More info<a/>`
        this.renderer.appendChild(followersContainer, followersList);
      })
    }, error => {
      console.log(error);
    })
  }

  getFollowing(){
    this.http.get(this.service.following)
    .subscribe(responseData =>{
      const followingInfo: any =  responseData;
      const followingContainer = document.querySelector('.following__container');

      followingInfo.forEach(following => {
        const followingList = document.createElement('section');
        followingList.classList.add('follow__items');
        followingList.classList.add('removable');
        followingList.innerHTML = `
          <h3 class="follow__header">${following.login}</h3>
          <img src="${following.avatar_url}" alt="followers img" class="follow__img">
          <a href="${following.html_url}" target="_blank" class="follow__btn">More info<a/>`
        followingContainer.appendChild(followingList);
      })
    }, error => {
      console.log(error);
    })
  }
}
