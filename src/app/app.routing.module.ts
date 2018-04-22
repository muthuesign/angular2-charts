import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //defaulted to dashboard
    { path: 'dashboard', component: DashboardComponent },
    { path: 'gallery', component: GalleryComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}