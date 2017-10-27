import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { GetStartedComponent }      from './get-started/get-started.component';
import { TestimonialsComponent }  from './testimonials/testimonials.component';
import { CoffeeSavingsComponent } from './coffee-savings/coffee-savings.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';

const appRoutes: Routes = [
  //{ path: 'get-started', component: GetStartedComponent },
  { path: '', component: CoffeeSavingsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'enroll-form', component: EnrollFormComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
