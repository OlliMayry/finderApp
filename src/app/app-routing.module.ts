import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { AutoLoginGuard } from './guards/auto-login.guard';
const routes: Routes = [

  {
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
  {
		path: 'login',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
		canLoad: [] // Check if we should show the introduction or forward to inside
	},
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'events/:id',
    loadChildren: () => import('./pages/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
