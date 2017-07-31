import { NgModule, ModuleWithProviders, enableProdMode } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

enableProdMode();

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
import {GallerysevenComponent} from './gallery/child_gallery/galleryseven.component';
import { GalleryeightComponent } from './gallery/child_gallery/galleryeight.component';
import { GallerynineComponent } from './gallery/child_gallery/gallerynine.component';

const routing: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    GalleryoneComponent,
    GallerytwoComponent,
    // GallerythreeComponent,
    GalleryfourComponent,
    GalleryfiveComponent,
    // GallerysixComponent,
    GallerysevenComponent,
    GalleryeightComponent,
    GallerynineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
