import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesCalendarComponent } from './resources-calendar.component';

describe('ResourcesCalendarComponent', () => {
  let component: ResourcesCalendarComponent;
  let fixture: ComponentFixture<ResourcesCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
