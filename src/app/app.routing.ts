import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar los componentes

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { IdentityGuard } from './services/identity.guard';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';

//Definir las rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [IdentityGuard]},
  {path: 'inicio', component: HomeComponent, canActivate: [IdentityGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout/:sure', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'post/:id', component: PostDetailComponent, canActivate: [IdentityGuard]},
  {path: 'new-post', component: PostNewComponent},
  {path: 'ajustes', component: UserEditComponent, canActivate: [IdentityGuard]},
  {path: 'about', component: AboutusComponent, canActivate: [IdentityGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [IdentityGuard]},
  {path: '**', component: ErrorComponent}
];

//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'});
