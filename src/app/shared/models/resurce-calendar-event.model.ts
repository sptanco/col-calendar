import { CalendarEvent } from 'angular-calendar';

export interface ResurceCalendarEvent extends CalendarEvent {
  resourceId: number;
}
