import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthComponent } from './user-auth.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserAuthComponent', () => {
  let component: UserAuthComponent;
  let fixture: ComponentFixture<UserAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAuthComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule]
    });
    fixture = TestBed.createComponent(UserAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
