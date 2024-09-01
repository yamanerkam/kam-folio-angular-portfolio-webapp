import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './components/navbar/navbar.module';
import { MenubarModule } from 'primeng/menubar';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterModule } from './components/footer/footer.module';
import { ContactMeModule } from './pages/contact-me/contact-me.module';
import { HomeModule } from './pages/home/home.module';
import { ProjectsModule } from './pages/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    MenubarModule,
    FooterModule,
    ContactMeModule,
    HomeModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
