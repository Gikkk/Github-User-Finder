import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserInputService } from '../user-input.service';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  repoBtn = false;
  followersBtn = false;
  followingBtn = false;
  repoAmount: number;
  followersAmount: number;
  followingAmount: number;

  constructor(
    private http: HttpClient,
    private service: UserInputService,
    private renderer:Renderer2,
    ){
  }


  ngOnInit(): void {
  }

  @ViewChild('repoContainer', { static: false }) repoContainer: ElementRef;
  getRepo(){
    this.http.get(this.service.repo)
    .subscribe(responseData =>{
      const repoInfo: any =  responseData;
      const repoContainer = this.repoContainer.nativeElement;
      this.repoBtn = true;

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

  @ViewChild('followersContainer', { static: false }) followersContainer: ElementRef;
  getFollowers(){
    this.http.get(this.service.followers)
    .subscribe(responseData =>{
      const followersInfo: any =  responseData;
      const followersContainer = this.followersContainer.nativeElement;
      this.followersBtn = true;

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

  @ViewChild('followingContainer', { static: false }) followingContainer: ElementRef;
  getFollowing(){
    this.http.get(this.service.following)
    .subscribe(responseData =>{
      const followingInfo: any =  responseData;
      const followingContainer = this.followingContainer.nativeElement;
      this.followingBtn = true;

      followingInfo.forEach(following => {
        const followingList = this.renderer.createElement('section');
        this.renderer.addClass(followingList, 'follow__items');
        this.renderer.addClass(followingList, 'removable');
        followingList.innerHTML = `
          <h3 class="follow__header">${following.login}</h3>
          <img src="${following.avatar_url}" alt="followers img" class="follow__img">
          <a href="${following.html_url}" target="_blank" class="follow__btn">More info<a/>`
        this.renderer.appendChild(followingContainer, followingList);
      })
    }, error => {
      console.log(error);
    })
  }
}
