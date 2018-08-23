import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubService } from './githubs/github.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubNavComponent } from './github-nav/github-nav.component';
import { GithubUserProfileComponent } from './github-user-profile/github-user-profile.component';
import { DayCountPipe } from './day-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubNavComponent,
    GithubUserProfileComponent,
    DayCountPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
