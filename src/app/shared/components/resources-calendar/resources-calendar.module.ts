import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CalendarModule } from 'angular-calendar';
import { ResourcesCalendarComponent } from './resources-calendar.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ResourcesCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    MatButtonToggleModule,
    MatButtonModule,
  ],
  exports: [ResourcesCalendarComponent],
})
export class ResourcesCalendarModule {}
