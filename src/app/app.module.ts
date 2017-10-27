import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }        from './app-routing.module';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { CompanyMatchComponent } from './company-match/company-match.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CoffeeSavingsComponent } from './coffee-savings/coffee-savings.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { PlanConfiguratorComponent } from './plan-configurator/plan-configurator.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HeaderComponent,
    FooterComponent,
    GetStartedComponent,
    CompanyMatchComponent,
    TestimonialsComponent,
    CoffeeSavingsComponent,
    EnrollFormComponent,
    PlanConfiguratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
