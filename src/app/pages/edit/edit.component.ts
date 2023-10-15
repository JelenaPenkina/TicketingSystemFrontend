import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  ticket: any; 

  constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const ticketId = params.get('id');
      // kood mis laadib pileteid serverist peaks olema siin 
    });
  }

  onSubmit() {
    this.ticketService.editTicket(this.ticket).subscribe(() => {
      this.router.navigate(['/active-tickets']);
    });
  }
}
