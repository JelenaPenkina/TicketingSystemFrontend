import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = 'localhost:8080/api/v1/ticket'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get(this.apiUrl);
  }

  getTicketDetails(ticketId: number) {
    return this.http.get(`${this.apiUrl}/${ticketId}`);
  }

  // Add other methods to create, update, or delete tickets as needed
}