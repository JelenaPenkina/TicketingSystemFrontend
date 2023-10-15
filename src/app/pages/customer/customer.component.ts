import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { TicketService } from '//api/v1/ticket'; // сервис создам позже

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  tickets: any[] = [];
  createButtonClicked: boolean = false;
  newTicket: { title: string, description: string } = { title: '', description: '' };
  selectedOption: string = 'welcome';

  constructor(private router: Router, private ticketService: TicketService) {}

  ngOnInit() {
    this.loadTickets();
  }
  
  loadTickets() {
    this.ticketService.getTickets().subscribe(
      (data: any[]) => this.tickets = data,
      (error: any) => console.error('Error loading tickets:', error)
    );
  }

  createTicket(newTicketData: any) {
    this.ticketService.createTicket(newTicketData).subscribe(
      () => {
        this.newTicket = { title: '', description: '' };
        this.loadTickets();
      },
      (error: any) => {
        console.error('Error creating ticket:', error);
      }
    );
  }

  toggleCreateButtonClass() {
    this.createButtonClicked = !this.createButtonClicked;
  }

  submitTicket() {
    console.log('New ticket: ', this.newTicket)
  }

  navigateToInProgress() {
    this.router.navigate(['/in-progress']);
  }

  navigateToDone() {
    this.router.navigate(['/done']);
  }

}

