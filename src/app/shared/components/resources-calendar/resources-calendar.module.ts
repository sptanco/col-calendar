import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesCalendarComponent } from './resources-calendar.component';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [ResourcesCalendarComponent],
  imports: [CommonModule, CalendarModule],
  exports: [ResourcesCalendarComponent],
})
export class ResourcesCalendarModule {}
