import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Ticket } from '../models/ticket';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = "http://localhost:8080/api/v1/ticket";
  

  constructor(private http: HttpClient) { }

  private handleResponse(response: any): any {
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
   // Create a new ticket
   createTicket(ticket: Ticket): Observable<Ticket> {
    console.log("Sending ticket:", ticket);
    console.log(this.apiUrl + "/customer");
    return this.http.post<Ticket>(`${this.apiUrl}/customer`, ticket, { withCredentials: true });
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<any>(`${this.apiUrl}/agent`,{ withCredentials: true });
  }

  // Fetch a single ticket by ID
  getTicketById(id: number): Observable<Ticket> {
    console.log(this.apiUrl);
    return this.http.get<Ticket>(`${this.apiUrl}/customer/${id}`);
  }

  getTicketByUserId(id: number): Observable<Ticket[]> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

 

  // Update an existing ticket
  updateTicket(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.apiUrl}/${id}`, ticket);
  }

  // Delete a ticket
  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
