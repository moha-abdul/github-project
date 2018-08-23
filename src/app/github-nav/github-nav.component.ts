import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubs/github.service';

@Component({
  selector: 'app-github-nav',
  templateUrl: './github-nav.component.html',
  styleUrls: ['./github-nav.component.css'],
  providers: [GithubService]
})
export class GithubNavComponent implements OnInit {

  constructor(public githubservice: GithubService) { }

  searchUser($input) {
    if ($input.target.value === '') {

    } else {
      this.githubservice.searchGithubUser($input.target.value);
      this.githubservice.searchGithubRepos($input.target.value);
    }
    console.log($input.target.value);
  }

  ngOnInit() {
  }
}
