import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoadDetailLayoutComponent } from './boad-detail-layout.component';

describe('BoadDetailLayoutComponent', () => {
  let component: BoadDetailLayoutComponent;
  let fixture: ComponentFixture<BoadDetailLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoadDetailLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoadDetailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
