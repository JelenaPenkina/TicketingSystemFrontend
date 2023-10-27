import { Component, OnInit } from '@angular/core';
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
  private authService: AuthService
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
    this.ticketService.getAllTickets().subscribe(
        this.handleTicketsResponse,
        this.handleError
    );
  } else {
    // Error handling if not agent. Return message in html
  }
}



}