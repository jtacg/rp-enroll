import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanConfiguratorComponent } from './plan-configurator.component';

describe('PlanConfiguratorComponent', () => {
  let component: PlanConfiguratorComponent;
  let fixture: ComponentFixture<PlanConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
