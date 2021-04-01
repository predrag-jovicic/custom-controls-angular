import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomcheckboxComponent } from './customcheckbox.component';

describe('CustomcheckboxComponent', () => {
  let component: CustomcheckboxComponent;
  let fixture: ComponentFixture<CustomcheckboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomcheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
