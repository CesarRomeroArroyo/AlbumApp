import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromesComponent } from './chromes.component';

describe('ChromesComponent', () => {
  let component: ChromesComponent;
  let fixture: ComponentFixture<ChromesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
