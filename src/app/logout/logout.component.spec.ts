import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LogoutComponent } from './logout.component';

describe('Logout Component', () => {
  let fixture: ComponentFixture<LogoutComponent>;
  let logoutComponent : LogoutComponent;
  let http : HttpClient;
  let httpController : HttpTestingController;
  let router : Router;
  let routerController : RouterTestingModule;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutComponent ]
    })
    .compileComponents();
  });
    
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule , RouterTestingModule.withRoutes([]), FormsModule],
      providers:  [LogoutComponent]
    });
    logoutComponent = TestBed.inject(LogoutComponent);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(LogoutComponent);
    router = TestBed.inject(Router);
    logoutComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(logoutComponent).toBeTruthy();
  });
});



