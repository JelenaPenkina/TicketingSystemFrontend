import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { AuthService } from 'src/app/services/auth.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {


  userType: string = '';
  loading: boolean= true;
  tickets: Ticket[] = [];

constructor( 
  private ticketService: TicketService, 
  private authService: AuthService,
  private router: Router
  ){}


handleTicketsResponse  = (data: Ticket[] ) => {
  this.tickets = data;
  this.loading = false;
}

handleError = (error: any) => {
  console.error("An error occurred: " , error);
  this.loading = false;
}


ngOnInit(): void{

  this.loading = true;
  this.userType = this.authService.getUserType();

  if(this.userType === 'AGENT') {
    this.ticketService.getAllTickets()
      .subscribe(
        this.handleTicketsResponse,  // Called on successful response
        this.handleError             // Called on error
      );
  } else {
    // Error handling if not agent. Return message in html
  }
}

viewTicketDetails(ticketId: number): void {
  this.router.navigate(['/ticket-detail', ticketId]);
}



}