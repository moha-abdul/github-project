import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Repos } from '../repos';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: Users;
  apiKey: string = environment.apiKey;
  api_Url: string = environment.apiUrl;
  repos$
  constructor(private http: HttpClientModule) { }
  searchGithubUser(username) {}
}
