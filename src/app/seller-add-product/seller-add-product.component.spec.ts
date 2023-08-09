import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SellerAddProductComponent } from './seller-add-product.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

describe('SellerAddProductComponent', () => {
  let component: SellerAddProductComponent;
  let fixture: ComponentFixture<SellerAddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ReactiveFormsModule, FormsModule ],
      declarations: [SellerAddProductComponent]
    });
    fixture = TestBed.createComponent(SellerAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
