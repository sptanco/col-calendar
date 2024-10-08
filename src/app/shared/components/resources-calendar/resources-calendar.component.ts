import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

import { Resource } from '../../models/resource.model';
import { ResurceCalendarEvent } from '../../models/resurce-calendar-event.model';

@Component({
  selector: 'app-resources-calendar',
  templateUrl: './resources-calendar.component.html',
  styleUrls: ['./resources-calendar.component.scss'],
})
export class ResourcesCalendarComponent implements OnChanges {
  @Input() public resources!: Resource[];
  @Input() public events!: ResurceCalendarEvent[];
  @Output() public eventChanged = new EventEmitter<ResurceCalendarEvent>();

  @Output() eventSelected = new EventEmitter<ResurceCalendarEvent>();

  public eventsInternal!: CalendarEvent[];

  public viewDate: Date = new Date();
  public refresh = new Subject<void>();
  public view: CalendarView = CalendarView.Week;
  public CalendarView = CalendarView;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['events'].currentValue) {
      this.eventsInternal = this.events.map((e) => ({
        ...e,
        cssClass: `col-cal-${
          this.resources.findIndex((r) => r.id == e.resourceId) + 1
        }-${this.resources.length}`,
      }));
    }
  }

  public eventTimesChanged(changeEvent: CalendarEventTimesChangedEvent): void {
    changeEvent.event.start = changeEvent.newStart;
    changeEvent.event.end = changeEvent.newEnd;
    this.eventChanged.emit(changeEvent.event as ResurceCalendarEvent);
    this.refresh.next();
  }

  public eventClick(e: {
    event: CalendarEvent;
    sourceEvent: MouseEvent | KeyboardEvent;
  }) {
    debugger;
    this.eventSelected.emit(e.event as ResurceCalendarEvent);
  }
}
