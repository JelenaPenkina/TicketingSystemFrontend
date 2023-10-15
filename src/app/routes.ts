import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";



export const routes = [
    { path : "", component: HomeComponent },
    { path : "login", component:LoginComponent}
];