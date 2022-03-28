import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing'
import { ReimbursementService } from './reimbursement.service';

describe('Reimbursment Service', () => {
  let reimbursementService: ReimbursementService;
  let http : HttpClient;
  let httpController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReimbursementService]
    });
    reimbursementService = TestBed.inject(ReimbursementService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('service created', () => {
    expect(reimbursementService).toBeDefined();
  });
});
