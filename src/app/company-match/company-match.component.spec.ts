import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMatchComponent } from './company-match.component';

describe('CompanyMatchComponent', () => {
  let component: CompanyMatchComponent;
  let fixture: ComponentFixture<CompanyMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
