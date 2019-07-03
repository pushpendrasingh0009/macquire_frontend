import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: 'admin', component: AdminComponent,canActivate:[AuthGuard] },
    { path: 'search', component: SearchComponent,canActivate:[AuthGuard] },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];