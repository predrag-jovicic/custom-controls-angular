import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdropdownlistComponent } from './customdropdownlist.component';

describe('CustomdropdownlistComponent', () => {
  let component: CustomdropdownlistComponent;
  let fixture: ComponentFixture<CustomdropdownlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomdropdownlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomdropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
