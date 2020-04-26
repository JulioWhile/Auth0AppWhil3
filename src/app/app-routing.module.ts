import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformacionUsuarioComponent } from './components/informacion-usuario/informacion-usuario.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full' ,component: HomeComponent },
  { path: 'informacion', component: InformacionUsuarioComponent, canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
