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
import { HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './pages/ticket/ticket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginDropdownComponent } from './login-dropdown/login-dropdown.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { ActiveTicketsComponent } from './pages/active-tickets/active-tickets.component';
import { TicketHistoryComponent } from './pages/ticket-history/ticket-history.component';
import { TicketService } from './ticket.service'; // Import your service

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TicketComponent,
    NavbarComponent,
    LoginDropdownComponent,
    CreateTicketComponent,
    ActiveTicketsComponent,
    TicketHistoryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
