import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-active-tickets',
  templateUrl: './active-tickets.component.html',
  styleUrls: ['./active-tickets.component.css']
})
export class ActiveTicketsComponent implements OnInit {
  activeTickets: any[] | undefined;

  constructor(private ticketService: TicketService) {} 

  ngOnInit() {
    this.ticketService.getActiveTickets().subscribe((data: any) => {
      this.activeTickets = data;
    });
  }
}
