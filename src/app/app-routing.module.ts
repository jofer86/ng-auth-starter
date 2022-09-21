import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@route/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./route/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
