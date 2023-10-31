import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { TicketCreateComponent } from "./pages/tickets/ticket-create/ticket-create.component";
import { TicketCustomerComponent } from "./pages/tickets/ticket-customer/ticket-customer.component";
import { TicketDeleteComponent } from "./pages/tickets/ticket-delete/ticket-delete.component";
import { TicketDetailComponent } from "./pages/tickets/ticket-detail/ticket-detail.component";
import { TicketEditComponent } from "./pages/tickets/ticket-edit/ticket-edit.component";
import { TicketListComponent } from "./pages/tickets/ticket-list/ticket-list.component";



export const routes = [
    { path : "", component: HomeComponent },
    { path : "login", component:LoginComponent},
    { path : "register", component:RegisterComponent},
    { path : "ticket-list", component:TicketListComponent},
    { path : "create", component:TicketCreateComponent},
    { path : "delete", component:TicketDeleteComponent},
    { path : "ticket-user", component:TicketCustomerComponent},
    { path : "ticket-detail/:id", component:TicketDetailComponent},
    {path: 'edit-ticket/:id',component: TicketEditComponent},
    


    

];