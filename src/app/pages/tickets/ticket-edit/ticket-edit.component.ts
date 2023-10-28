import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {
  allTickets: Ticket[] = [];
  selectedTicketId!: number;
  ticket!: Ticket;

  constructor(
      private ticketService: TicketService,
      private router: Router
  ) { }

  ngOnInit(): void {
      // Fetch all tickets for the dropdown
      this.ticketService.getAllTickets()
          .subscribe(
              tickets => this.allTickets = tickets,
              error => console.error('Error fetching tickets:', error)
          );
  }

  fetchTicketDetails(): void {
      if (this.selectedTicketId) {
          this.ticketService.getTicketById(this.selectedTicketId)
              .subscribe(
                  ticket => this.ticket = ticket,
                  error => console.error('Error fetching ticket:', error)
              );
      }
  }

  updateTicket(): void {
      this.ticketService.updateTicket(this.ticket.id, this.ticket)
          .subscribe(
              () => {
                  alert('Ticket updated successfully!');
                  this.router.navigate(['/ticket-detail', this.ticket.id]);
              },
              error => console.error('Error updating ticket:', error)
          );
  }
}
