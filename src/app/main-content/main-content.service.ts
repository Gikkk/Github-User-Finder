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
      console.log(responseData);
    }, error => {
      console.log(error);
    })
  }

  onLoadRepo(){
    this.http.get(this.repo)
    .subscribe(responseData =>{
      console.log(responseData);
    }, error => {
      console.log(error);
    })
  }

  onLoadFollowers(){
    this.http.get(this.followers)
    .subscribe(responseData =>{
      console.log(responseData);
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
