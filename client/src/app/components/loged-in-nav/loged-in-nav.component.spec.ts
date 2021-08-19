import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedInNavComponent } from './loged-in-nav.component';

describe('LogedInNavComponent', () => {
  let component: LogedInNavComponent;
  let fixture: ComponentFixture<LogedInNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogedInNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogedInNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
