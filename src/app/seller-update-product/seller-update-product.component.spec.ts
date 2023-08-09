import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUpdateProductComponent } from './seller-update-product.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { RouterTestingModule } from "@angular/router/testing";

describe('SellerUpdateProductComponent', () => {
  let component: SellerUpdateProductComponent;
  let fixture: ComponentFixture<SellerUpdateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerUpdateProductComponent],
      imports: [ HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
    });
    fixture = TestBed.createComponent(SellerUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
