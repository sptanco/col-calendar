import { Component, ViewChild } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import { ResurceCalendarEvent } from './shared/models/resurce-calendar-event.model';
import { Resource } from './shared/models/resource.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('drawer') public drawer!: MatDrawer;

  public eventSelected: ResurceCalendarEvent | null = null;

  public resources: Resource[] = [
    { id: 1, name: 'uno' },
    { id: 2, name: 'due' },
    { id: 3, name: 'tre' },
  ];
  public events: ResurceCalendarEvent[] = [
    {
      id: 1,
      resourceId: 1,
      title: 'prova1',
      start: new Date('2024-10-02T08:00:00'),
      end: new Date('2024-10-02T10:00:00'),
      draggable: true,
      resizable: { afterEnd: true, beforeStart: true },
    },
    {
      id: 2,
      resourceId: 2,
      title: 'prova2',
      start: new Date('2024-10-03T08:00:00'),
      end: new Date('2024-10-03T10:00:00'),
      draggable: true,
      resizable: { afterEnd: true, beforeStart: true },
    },
    {
      id: 3,
      resourceId: 3,
      title: 'prova3',
      start: new Date('2024-10-03T08:00:00'),
      end: new Date('2024-10-03T10:00:00'),
      draggable: true,
      resizable: { afterEnd: true, beforeStart: true },
    },
    {
      id: 4,
      resourceId: 2,
      title: 'prova4',
      start: new Date('2024-10-03T11:00:00'),
      end: new Date('2024-10-03T13:00:00'),
      draggable: true,
      resizable: { afterEnd: true, beforeStart: true },
    },
  ];

  public selectEvent(event: ResurceCalendarEvent) {
    this.eventSelected = event;
    this.drawer.open();
  }

  public newEvent() {
    this.eventSelected = {
      title: 'New Event',
      start: new Date(),
      end: new Date(),
      resourceId: 1,
      draggable: true,
      resizable: {
        afterEnd: true,
        beforeStart: true,
      },
    };
    this.drawer.open();
  }

  public saveEvent(event: ResurceCalendarEvent) {
    if (event.id) {
      const i = this.events.findIndex((e) => e.id == event.id);
      this.events[i] = event;
    } else {
      event.id = this.events.length + 1;
      this.events.push(event);
    }
    this.events = [...this.events]; // For trigher ngChange
    this.drawer.close();
  }
}
