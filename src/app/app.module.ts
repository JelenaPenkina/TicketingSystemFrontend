import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/homepage/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './pages/tickets/ticket.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginDropdownComponent } from './components/navbar/login-dropdown/login-dropdown.component';

import { TicketHistoryComponent } from './pages/tickets/ticket-history/ticket-history.component';
import { TicketListComponent } from './app/views/tickets/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './pages/tickets/ticket-create/ticket-create.component';
import { TicketDetailComponent } from './pages/tickets/ticket-detail/ticket-detail.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TicketComponent,
    NavbarComponent,
    LoginDropdownComponent,
   
    TicketHistoryComponent,
         TicketListComponent,
         TicketCreateComponent,
         TicketDetailComponent,
         RegisterComponent,
         UserProfileComponent,
         UserEditComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
