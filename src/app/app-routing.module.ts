import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NidamComponent } from './nidam/nidam.component';
import { MawakitComponent } from './mawakit/mawakit.component';
import { WasfaComponent } from './wasfa/wasfa.component';
import { DoaaComponent } from './doaa/doaa.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nidam', component: NidamComponent },
  { path: 'mawakit', component: MawakitComponent },
  { path: 'wasfa', component: WasfaComponent },
  { path: 'doaa', component: DoaaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
