import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './shared/home-page/home-page.component';
import { PipeTemplateFormComponent } from './forms-section/pipe-template-form/pipe-template-form.component';
import { AuthGuard } from './auth.guard';
import { FormsSectionComponent } from './forms-section/forms-section.component';
import { SignupFormComponent } from './forms-section/signup-form/signup-form.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'services',
    loadChildren: () => import('./services-section/services-section.module').then(_ => _.ServicesSectionModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'observables',
    loadChildren: () => import('./observables-section/observables-section.module').then(_ => _.ObservablesSectionModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forms', component: FormsSectionComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      { path: 'pipe-template-form', component: PipeTemplateFormComponent },
      { path: 'signup-reactive-form', component: SignupFormComponent }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
