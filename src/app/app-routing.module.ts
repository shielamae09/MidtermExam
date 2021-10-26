import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { GalleryComponent } from '../app/pages/gallery/gallery.component';
import { ContactsComponent } from '../app/pages/contacts/contacts.component';

const routes: Routes = [
  {path:'', component:ProfileComponent},
  {path:'contact',component:ContactsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
