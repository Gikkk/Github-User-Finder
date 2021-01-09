import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInputService {

  userInput = 'gikkk';
  info = `https://api.github.com/users/${this.userInput}`;
  repo = `https://api.github.com/users/${this.userInput}/repos`;
  followers = `https://api.github.com/users/${this.userInput}/followers`;
  following = `https://api.github.com/users/${this.userInput}/following`;

  constructor() { }

  getUserInput(value){
    this.userInput = value;
    this.info = `https://api.github.com/users/${this.userInput}`;
    this.repo = `https://api.github.com/users/${this.userInput}/repos`;
    this.followers = `https://api.github.com/users/${this.userInput}/followers`;
    this.following = `https://api.github.com/users/${this.userInput}/following`;
  }
}
