import { ImportData } from './../../node_modules/@stencil/core/internal/stencil-private.d';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



export const routes: Routes = [
    { path: 'login', component: LoginComponent}, 
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'dashboard', component: DashboardComponent}
];