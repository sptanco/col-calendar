import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { CalendarModule } from 'angular-calendar';

import { ResourcesCalendarComponent } from './resources-calendar.component';

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
