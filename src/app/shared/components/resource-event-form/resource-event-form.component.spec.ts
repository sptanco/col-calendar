import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceEventFormComponent } from './resource-event-form.component';

describe('ResourceEventFormComponent', () => {
  let component: ResourceEventFormComponent;
  let fixture: ComponentFixture<ResourceEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceEventFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
