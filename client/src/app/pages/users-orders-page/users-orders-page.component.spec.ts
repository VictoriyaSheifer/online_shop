import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOrdersPageComponent } from './users-orders-page.component';

describe('UsersOrdersPageComponent', () => {
  let component: UsersOrdersPageComponent;
  let fixture: ComponentFixture<UsersOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersOrdersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
