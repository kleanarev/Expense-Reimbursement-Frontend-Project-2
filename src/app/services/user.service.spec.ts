import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing'
import { UserService } from './user.service';

describe('User Service', () => {
  let userService: UserService;
  let http : HttpClient;
  let httpController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    userService = TestBed.inject(UserService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('service created', () => {
    expect(userService).toBeDefined();
  });
});
