import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserInputService } from './user-input.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  accountType: string
  username: any;
  name: any;
  location: string;
  createData: number;
  updateData: number;
  errorMessage: string;
  hrefAttr: string;
  imageSrc: string;

  constructor(private http: HttpClient, private service: UserInputService) {
  }

  getUserInput(value: string){
    this.service.getUserInput(value);
    let elem = document.querySelectorAll('.removable')
    if(elem !== null){
      elem.forEach(repo =>{
        repo.parentNode.removeChild(repo);
      })
    }
    this.onLoadData();
  }

  onLoadData(){
    this.http.get(this.service.info)
    .subscribe(responseData =>{
      let info: any = responseData;

      document.querySelector(".account__followers--highlighted").textContent = `${info.followers}`;
      document.querySelector(".account__repo--highlighted").textContent = `${info.public_repos}`;
      document.querySelector(".account__following--highlighted").textContent = `${info.following}`;

      this.imageSrc = info.avatar_url;
      this.hrefAttr = info.html_url;
      this.accountType = info.type;
      this.username = info.login;
      this.name = info.name;
      this.location = info.location;
      this.createData = info.created_at.slice(0, 10);
      this.updateData = info.updated_at.slice(0, 10);

      if(info.name === null){
        this.name = 'Not mentioned';
      }
      if(info.location === null){
        this.location = 'Not mentioned';
      }
    }, error => {
      this.errorMessage = `Search field is Empty or user ${error.statusText}`;
    })
  }

  ngOnInit(){
    this.onLoadData();
  }
}
