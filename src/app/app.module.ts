import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { InProgressTicketsComponent } from './in-progress-tickets/in-progress-tickets.component';
import { DoneTicketsComponent } from './done-tickets/done-tickets.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { AgentComponent } from './pages/agent/agent.component';
import { ActiveTicketsComponent } from './active-tickets/active-tickets.component';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    InProgressTicketsComponent,
    DoneTicketsComponent,
    TicketListComponent,
    CustomerComponent,
    AgentComponent,
    ActiveTicketsComponent,
    EditComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
