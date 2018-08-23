import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubs/github.service';
import { Users } from '../users';

@Component({
  selector: 'app-github-user-profile',
  templateUrl: './github-user-profile.component.html',
  styleUrls: ['./github-user-profile.component.css']
})
export class GithubUserProfileComponent implements OnInit {

  constructor(public githubservice: GithubService) { }

  ngOnInit() {
  }

}
