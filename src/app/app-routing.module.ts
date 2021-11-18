import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./modules/dashboard/pages/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    //lazy loading
    path: 'projects',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
