import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './common/footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RegisterComponent } from './register/register.component';
import { HikamComponent } from './hikam/hikam.component';
import { MawakitComponent } from './mawakit/mawakit.component';
import { RecetteComponent } from './recette/recette.component';
import { ConseilComponent } from './conseil/conseil.component';
import { NidamComponent } from './nidam/nidam.component';
import { WasfaComponent } from './wasfa/wasfa.component';
import { DoaaComponent } from './doaa/doaa.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AnimatedTextComponent } from './components/animated-text/animated-text.component';
import { BenevolatComponent } from './components/benevolat/benevolat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    FooterComponent,
    InscriptionComponent,
    RegisterComponent,
    HikamComponent,
    MawakitComponent,
    RecetteComponent,
    ConseilComponent,
    NidamComponent,
    WasfaComponent,
    DoaaComponent,
    CarouselComponent,
    AnimatedTextComponent,
    BenevolatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
