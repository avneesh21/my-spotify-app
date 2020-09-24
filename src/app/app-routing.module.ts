import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { ConceptsComponent } from './concepts/concepts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChildroutingComponent } from './concepts/childrouting/childrouting.component';
import { LinkComponent } from './concepts/link/link.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts',
      children: [
        { path: '', component: ConceptsComponent },
        { path: 'childrouting', component: ChildroutingComponent },
        { path: 'link', component: LinkComponent }
      ] },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'error', component: PagenotfoundComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
