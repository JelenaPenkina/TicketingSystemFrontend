import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { TicketCreateComponent } from "./pages/tickets/ticket-create/ticket-create.component";
import { TicketDeleteComponent } from "./pages/tickets/ticket-delete/ticket-delete.component";
import { TicketListComponent } from "./pages/tickets/ticket-list/ticket-list.component";



export const routes = [
    { path : "", component: HomeComponent },
    { path : "login", component:LoginComponent},
    { path : "register", component:RegisterComponent},
    { path : "ticket-list", component:TicketListComponent},
    { path : "create", component:TicketCreateComponent},
    { path : "delete", component:TicketDeleteComponent},
    

];