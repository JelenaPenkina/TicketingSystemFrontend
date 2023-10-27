import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';
import { TicketCreateComponent } from './pages/tickets/ticket-create/ticket-create.component';
import { TicketEditComponent } from './pages/tickets/ticket-edit/ticket-edit.component';
import { TicketListComponent } from './pages/tickets/ticket-list/ticket-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'ticket-create', component: TicketCreateComponent },
  { path: 'ticket-edit', component: TicketEditComponent },
  { path: 'ticket-list', component: TicketListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
