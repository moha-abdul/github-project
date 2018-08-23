import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Repos } from '../repos';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: Users;
  apiKey: string = environment.apiKey;
  api_Url: string = environment.apiUrl;
  repos$;
  constructor(private http: HttpClient) { }
  searchGithubUser(username) {
    // tslint:disable-next-line:class-name
    interface userInfo {
      login: string;
      location: string;
      followers: number;
      following: number;
      created_at: Date;
      email: string;
    }
    const promise = new Promise(
      (resolve, reject) => {
        this.http.get<userInfo>(this.api_Url + username + this.apiKey)
        .toPromise()
        .then(
          githubData => {
            this.user = new Users(
              githubData.login,
              githubData.location,
              githubData.followers,
              githubData.following,
              githubData.created_at,
              githubData.email,
            );

            // console.log(this.user)
            console.log(githubData);

            resolve();
          },
          error => {
            console.log(error);
          }
        );
      }
    );
    return promise;
  }
  reposRequested(username) {

    interface userInfo {
       name: string;
       forks: number;
       watcher: number;
    }

    const promise = new Promise(
      (resolve, reject) => {
        this.http.get<userInfo>(this.api_Url + username + '/repos' + this.apiKey )
        .toPromise()
        .then(
          githubData => {
            // console.log(data[0])
            // for(let i = 0 ; i<=30 ; i++){
            //   this.repos.push(this.repo = new Repo(data[i].name , data[i].forks, data[i].watcher))
            //   // console.log(data[i])
            //   console.log(this.repos)
            // }
            // console.log(this.repos)
            this.repos$ = githubData;
            console.log(this.repos$);

            resolve();
          },
          error => {
            console.log(error);
          }
        );
      }
    );
    return promise;
  }
}

