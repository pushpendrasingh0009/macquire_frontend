import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login', component: SignInComponent
},
{ path: 'admin', component: AdminComponent,canActivate:[AuthGuard] },
{ path: 'search', component: SearchComponent,canActivate:[AuthGuard] },
{ path : '', redirectTo:'/login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
