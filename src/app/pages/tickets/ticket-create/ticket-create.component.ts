import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { AuthService } from 'src/app/services/auth.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { UserTicketRequest } from 'src/app/models/userTicketRequest';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent {
  ticket: UserTicketRequest = {
    id:1,
    title: '',
    description: '',
    userId: this.authService.getUserId(),
    // Set the userId here
  };
  

  constructor(
    private router: Router, 
    private ticketService: TicketService, 
    private authService: AuthService) {
      
    } // Inject both services

  createTicket() {
    this.ticketService.createTicket(this.ticket)
    .subscribe((data:UserTicketRequest) => {
      // handle the response, maybe navigate to another page or show a success message
      this.authService.getUserId();
      this.authService.getUser();
      console.log(this.authService.getUserId());
      console.log('Ticket created!', data);
      this.router.navigate(['/']);
    });
  }
}
