import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgBaseComponent } from './cg-base.component';

describe('CgBaseComponent', () => {
  let component: CgBaseComponent;
  let fixture: ComponentFixture<CgBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
