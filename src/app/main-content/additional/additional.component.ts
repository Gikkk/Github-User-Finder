import { Component, OnInit } from '@angular/core';
import { HttpService} from '../main-content.service';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  getRepo(){
    this.httpService.getRepo();
  }
  getFollowers(){
    this.httpService.getFollowers();
  }
  getFollowing(){
    this.httpService.getFollowing();
  }

  ngOnInit(): void {
  }

}
