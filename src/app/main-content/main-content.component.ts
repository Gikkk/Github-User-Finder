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

  getUserInput(value){
    this.userInput = value;
    this.info = `https://api.github.com/users/${this.userInput}`;
    // this.repo = `https://api.github.com/users/${this.userInput}/repos`;
    // this.followers = `https://api.github.com/users/${this.userInput}/followers`;
    // this.following = `https://api.github.com/users/${this.userInput}/following`;

    this.onLoadData();
  }

  ngOnInit(){
    this.onLoadData();
  }
}
