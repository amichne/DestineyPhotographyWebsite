import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './gallery/contact.component';
import { GalleryoneComponent } from './gallery/child_gallery/galleryone.component';
import { GallerytwoComponent } from './gallery/child_gallery/gallerytwo.component';
// import { GallerythreeComponent } from './gallery/child_gallery/gallerythree.component';
import { GalleryfourComponent } from './gallery/child_gallery/galleryfour.component';
import { GalleryfiveComponent } from './gallery/child_gallery/galleryfive.component';
// import { GallerysixComponent } from './gallery/child_gallery/gallerysix.component';
import { GallerysevenComponent } from './gallery/child_gallery/galleryseven.component';
import { GalleryeightComponent } from './gallery/child_gallery/galleryeight.component';
import { GallerynineComponent } from './gallery/child_gallery/gallerynine.component';


export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'galleryone', component: GalleryoneComponent },
  { path: 'gallerytwo', component: GallerytwoComponent },
  // { path: 'gallerythree', component: GallerythreeComponent },
  { path: 'galleryfour', component: GalleryfourComponent },
  { path: 'galleryfive', component: GalleryfiveComponent },
  // { path: 'gallerysix', component: GallerysixComponent },
  { path: 'galleryseven', component: GallerysevenComponent },
  { path: 'galleryeight', component: GalleryeightComponent },
  { path: 'gallerynine', component: GallerynineComponent }
];

