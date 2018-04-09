import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

export const routing = RouterModule.forRoot(routes);
