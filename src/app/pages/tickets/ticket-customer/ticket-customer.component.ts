import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { AuthService } from 'src/app/services/auth.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-customer',
  templateUrl: './ticket-customer.component.html',
  styleUrls: ['./ticket-customer.component.css']
})
export class TicketCustomerComponent implements OnInit {

  tickets: Ticket[] = [];
  userId: number = this.authService.getUserId();
  userType: string = '';
  loading: boolean = true;


  constructor(
    private ticketService: TicketService,
    private authService: AuthService,
    private router: Router
  ) { }

  handleTicketsResponse  = (data: Ticket[] ) => {
    this.tickets = data;
    this.loading = false;
  }
  
  handleError = (error: any) => {
    console.error("An error occurred: " , error);
    this.loading = false;
  }

  ngOnInit(): void {

    this.loading = true;
    this.userType = this.authService.getUserType();

    if (this.userType === 'CUSTOMER') {
      this.ticketService.getTicketByUserId(this.userId).subscribe(
        
        this.handleTicketsResponse,  // Called on successful response
        this.handleError   // Called on error
      );
    } else {
      // Error handling if not Customer. Return message in html
    }
  }

  viewTicketDetails(ticketId: number): void {
    this.router.navigate(['/ticket-detail', ticketId]);
  }

  // fetchTickets(): void {
  //   this.ticketService.getTicketByUserId(this.userId).subscribe(
  //     data => {
  //       this.tickets = data;
  //     },
  //     error => {
  //       console.error('Error fetching tickets:', error);
  //     }
  //   );
  // }

}
