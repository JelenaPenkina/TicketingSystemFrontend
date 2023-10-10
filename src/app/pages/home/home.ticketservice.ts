import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'localhost:8080/ticket/1';

  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get<any[]>(`${this.apiUrl}/tickets`);
  }

  createTicket(newTicketData : any) {
    return this.http.post(`${this.apiUrl}/tickets`, newTicketData);
  }

}