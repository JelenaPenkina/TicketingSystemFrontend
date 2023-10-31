import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { AuthService } from 'src/app/services/auth.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket!: Ticket; //| null = null
  ticketId!: number;
  userType!: string;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ticketId = +params['id']; // the "+" is a shorthand to convert a string to a number
      this.userType = this.authService.getUserType();
      this.fetchTicketDetail();
    });
  }

  fetchTicketDetail(): void {
    if (this.userType === 'AGENT') {
      this.ticketService.getTicketDetailForAgent(this.ticketId).subscribe(
        data => {
          this.ticket = data;
          console.log(data)
        });
    } else if (this.userType === 'CUSTOMER') {
      this.ticketService.getTicketDetailForCustomer(this.ticketId).subscribe(
        data => {
          this.ticket = data;
        });
    } else {
      console.error('Invalid userType:', this.userType);
    }
  }
isAgent(): boolean {
    return this.authService.isAgent();
  }



}
