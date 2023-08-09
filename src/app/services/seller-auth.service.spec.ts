import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { SellerAuthService } from './seller-auth.service';

describe('SellerAuthService', () => {
  let service: SellerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [SellerAuthService]
    });
    service = TestBed.inject(SellerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
