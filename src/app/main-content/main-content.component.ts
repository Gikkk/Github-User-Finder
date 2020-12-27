import { Component, OnInit } from '@angular/core';
import { HttpService} from './main-content.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  value: any;

  update(value: string) {
    this.value = value;
    console.log(value);
  }

  // first data
  onLoadData() {
    this.httpService.onLoadData();
  }

  ngOnInit(){
    this.onLoadData();
  }
}
