import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserInputService } from './user-input.service';
import { AdditionalComponent } from './additional/additional.component';

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

  @ViewChild(AdditionalComponent) additional: AdditionalComponent;
  getUserInput(value: string){
    this.service.getUserInput(value);
    this.additional.repoBtn = false;
    this.additional.followersBtn = false;
    this.additional.followingBtn = false;

    let elem = document.querySelectorAll('.removable');
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

      this.additional.repoAmount = info.public_repos;
      this.additional.followersAmount = info.followers;
      this.additional.followingAmount = info.following;
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
