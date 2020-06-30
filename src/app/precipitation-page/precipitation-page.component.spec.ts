import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipitationPageComponent } from './precipitation-page.component';

describe('PrecipitationPageComponent', () => {
  let component: PrecipitationPageComponent;
  let fixture: ComponentFixture<PrecipitationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecipitationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecipitationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
