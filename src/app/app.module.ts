import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubService } from './githubs/github.service';

import { AppComponent } from './app.component';
import { GithubNavComponent } from './github-nav/github-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
