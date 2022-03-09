import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XToolbarComponent } from './x-toolbar.component';

describe('XToolbarComponent', () => {
  let component: XToolbarComponent;
  let fixture: ComponentFixture<XToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
