import { Component, OnInit } from '@angular/core';
import { TicketService } from '/api/v1/tickets';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  tickets: any[] = [];
  newTicket: { title: string, description: string } = { title: '', description: '' };

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.getTickets().subscribe((data: any) => {
      this.tickets = data;
    });
  }

  createTicket() {
    this.ticketService.createTicket(this.newTicket).subscribe(() => {
      this.newTicket = { title: '', description: '' };
      this.loadTickets();
    });
  }
}