import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    const sendHttpRequest = (method, url, data) => {
      return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
      }).then(response => {
        if (response.status >= 400) {
          return response.json().then(errResData => {
            const error = new Error('Error!');
            error.data = errResData;
            throw error;
          });
        }
        return response.json();
      });
    };

    // Getting data
    const getData = () => {
      sendHttpRequest('GET', 'https://api.github.com/users/sdolidze').then(responseData => {
        console.log(responseData);
        document.getElementById("test").src = `${responseData.avatar_url}`;
        document.getElementById("test1").textContent = `created: ${responseData.created_at}`;
        document.getElementById("test2").textContent = `followers: ${responseData.followers}`;
        document.getElementById("test3").textContent = `type: ${responseData.type}`;
        document.getElementById("test4").textContent = `login: ${responseData.login}`;
        document.getElementById("test5").textContent = `name: ${responseData.name}`;
        document.getElementById("test6").textContent = `Location: ${responseData.location}`;
        document.getElementById("test7").textContent = `repositories: ${responseData.public_repos}`;
        document.getElementById("test8").textContent = `update time: ${responseData.updated_at}`;
        document.getElementById("test9").setAttribute("href", `${responseData.html_url}`);
      });
    };
    getData()
  }
}
