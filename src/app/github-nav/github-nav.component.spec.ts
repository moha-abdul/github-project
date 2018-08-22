import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubNavComponent } from './github-nav.component';

describe('GithubNavComponent', () => {
  let component: GithubNavComponent;
  let fixture: ComponentFixture<GithubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
