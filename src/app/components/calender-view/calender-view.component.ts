import { Component, OnInit } from '@angular/core';
import { Calendar, EventInput } from '@fullcalendar/core';


@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css']
})
export class CalenderViewComponent implements OnInit{
  calendar: Calendar | any;

  constructor() { }

  ngOnInit(): void {
    this.initializeCalendar();
  }

  initializeCalendar(): void {
    const calendarEl: HTMLElement = document.getElementById('calendar')!;
    this.calendar = new Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Default view is monthly
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: this.generateSampleEvents(), // Sample events data
      eventClick: this.handleEventClick
    });
    this.calendar.render();
  }

  generateSampleEvents(): EventInput[] {
    // Sample events data
    return [
      { title: 'Meeting', start: '2024-04-01T10:00:00', end: '2024-04-01T12:00:00', color: 'blue' },
      { title: 'Deadline', start: '2024-04-05', color: 'red' },
      { title: 'Task Due', start: '2024-04-10', color: 'orange' }
    ];
  }

  handleEventClick(info: any): void {
    alert('Event: ' + info.event.title);
  }

  changeView(view: string): void {
    if (this.calendar) {
      this.calendar.changeView(view);
    }
  }
}
