import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  fetchCalendarData(calendarUrl: string) {
    return this.http.get(calendarUrl, { responseType: 'text' });
  }
}
