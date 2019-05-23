import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopchromeComponent } from './shopchrome.component';

describe('ShopchromeComponent', () => {
  let component: ShopchromeComponent;
  let fixture: ComponentFixture<ShopchromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopchromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopchromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
