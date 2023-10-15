import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/homepage/home.component';

import { TicketHistoryComponent } from './pages/tickets/ticket-history/ticket-history.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'ticket-history', component: TicketHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
