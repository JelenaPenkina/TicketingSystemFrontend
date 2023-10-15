import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { TicketHistoryComponent } from './pages/tickets/ticket-history/ticket-history.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ticket-history', component: TicketHistoryComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'ticket-history', component: TicketHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
