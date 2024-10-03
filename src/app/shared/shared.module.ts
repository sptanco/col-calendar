import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesCalendarModule } from './components/resources-calendar/resources-calendar.module';
import { ResourceEventFormModule } from './components/resource-event-form/resource-event-form.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ResourcesCalendarModule, ResourceEventFormModule],
  exports: [ResourcesCalendarModule, ResourceEventFormModule],
})
export class SharedModule {}
