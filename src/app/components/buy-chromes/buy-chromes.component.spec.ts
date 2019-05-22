import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyChromesComponent } from './buy-chromes.component';

describe('BuyChromesComponent', () => {
  let component: BuyChromesComponent;
  let fixture: ComponentFixture<BuyChromesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyChromesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyChromesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
