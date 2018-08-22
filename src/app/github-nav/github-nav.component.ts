import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubs/github.service';

@Component({
  selector: 'app-github-nav',
  templateUrl: './github-nav.component.html',
  styleUrls: ['./github-nav.component.css']
})
export class GithubNavComponent implements OnInit {

  constructor(public githubservice: GithubService) { }

  ngOnInit() {
  }

}
