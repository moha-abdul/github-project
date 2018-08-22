import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiKey = environment.apiKey;
  api_Url = environment.apiUrl;

  constructor(private http: HttpClientModule) { }
  searchGithub(username) {
  }
}
