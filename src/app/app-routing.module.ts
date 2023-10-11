import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { ActiveTicketsComponent } from './pages/active-tickets/active-tickets.component';
import { TicketHistoryComponent } from './pages/ticket-history/ticket-history.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-ticket', component: CreateTicketComponent },
  { path: 'active-tickets', component: ActiveTicketsComponent },
  { path: 'ticket-history', component: TicketHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
