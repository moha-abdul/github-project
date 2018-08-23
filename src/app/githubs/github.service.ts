import { Injectable } from '@angular/core';
import { Users } from '../users';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: Users;
  apiKey: string = environment.apiKey;
  api_Url: string = environment.apiUrl;
  // repos$;
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
}
