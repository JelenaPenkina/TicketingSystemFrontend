import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Ticket } from '../models/ticket';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserTicketRequest } from '../models/userTicketRequest';
// import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = "http://localhost:8080/api/v1/ticket";


  constructor(private http: HttpClient) { }

  handleResponse(response: any): any {
    console.log("Response received:", response);
    return response;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('A client-side error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

  }

  createTicket(ticket: UserTicketRequest): Observable<Ticket> {
    console.log("Request: ", ticket);
    console.log(this.apiUrl + "/customer");
    return this.http.post<Ticket>(`${this.apiUrl}/customer`, ticket, { withCredentials: true });
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<any>(`${this.apiUrl}/agent`, { withCredentials: true });
  }

  getTicketById(id: number): Observable<Ticket> {
    console.log(this.apiUrl);
    return this.http.get<Ticket>(`${this.apiUrl}/agent/${id}`, { withCredentials: true });
  }

  getTicketByUserId(id: number): Observable<Ticket[]> {
    return this.http.get<any>(`${this.apiUrl}/customer/all/${id}`, { withCredentials: true });
  }

  getTicketDetailForAgent(ticketId: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/agent/${ticketId}`, { withCredentials: true });
  }
  getTicketDetailForCustomer(ticketId: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/customer/${ticketId}`, { withCredentials: true });
  }

  updateTicket(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.apiUrl}/agent/${id}`, ticket, { withCredentials: true });
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }


}
