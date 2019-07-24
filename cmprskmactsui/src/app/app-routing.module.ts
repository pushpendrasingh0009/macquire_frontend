import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { PreConflictChkComponent } from './pre-conflict-chk/pre-conflict-chk.component';
import { PreliminaryCnfltChkComponent } from './preliminary-cnflt-chk/preliminary-cnflt-chk.component';

export const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'preconfcheck', component: PreConflictChkComponent, canActivate: [AuthGuard] },
  { path: 'prelimiaryCnfltChk', component: PreliminaryCnfltChkComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
