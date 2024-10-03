import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Resource } from '../../models/resource.model';
import { ResurceCalendarEvent } from '../../models/resurce-calendar-event.model';

@Component({
  selector: 'app-resource-event-form',
  templateUrl: './resource-event-form.component.html',
  styleUrls: ['./resource-event-form.component.scss'],
})
export class ResourceEventFormComponent implements OnInit, OnChanges {
  @Input() event?: ResurceCalendarEvent | null; // Input per l'evento da popolare
  @Input() resources: Resource[] = []; // Input per le risorse
  @Output() eventSubmitted = new EventEmitter<ResurceCalendarEvent>(); // Output per l'evento submit
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event'].currentValue) {
      this.populateForm(this.event!);
    }
  }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      id: null,
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endDate: ['', Validators.required],
      endTime: ['', Validators.required],
      resourceId: ['', Validators.required],
      draggable: [false],
      resizable: this.fb.group({
        beforeStart: [false],
        afterEnd: [false],
      }),
    });

    // Se l'evento è fornito, popola la form
    if (this.event) {
      this.populateForm(this.event);
    }
  }

  populateForm(event: ResurceCalendarEvent): void {
    this.eventForm.patchValue({
      id: event.id,
      title: event.title,
      startDate: this.formatDate(event.start),
      startTime: this.formatTime(event.start),
      endDate: this.formatDate(event.end!),
      endTime: this.formatTime(event.end!),
      resourceId: event.resourceId,
      draggable: event.draggable,
      resizable: event.resizable,
    });
  }

  formatDate(date: Date): string {
    return date ? date.toISOString().split('T')[0] : '';
  }

  formatTime(date: Date): string {
    return date ? date.toTimeString().split(' ')[0].slice(0, 5) : ''; // Format HH:mm
  }

  onSubmit(): void {
    debugger;
    if (this.eventForm.valid) {
      const formValue = this.getFormValue();
      this.eventSubmitted.emit(formValue); // Emetti l'output con i dati del form
    }
  }

  getFormValue(): ResurceCalendarEvent {
    const { startDate, startTime, endDate, endTime, ...rest } =
      this.eventForm.value;

    const start = new Date(`${startDate}T${startTime}`);
    const end = endDate && endTime ? new Date(`${endDate}T${endTime}`) : null;

    return { ...rest, start, end };
  }
}
