import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnToolbarComponent } from './hn-toolbar.component';

describe('HnToolbarComponent', () => {
  let component: HnToolbarComponent;
  let fixture: ComponentFixture<HnToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HnToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
