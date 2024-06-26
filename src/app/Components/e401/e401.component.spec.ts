import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E401Component } from './e401.component';

describe('E401Component', () => {
  let component: E401Component;
  let fixture: ComponentFixture<E401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E401Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(E401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
