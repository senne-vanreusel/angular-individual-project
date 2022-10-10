import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { WatchedComponent } from './pages/watched/watched.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'watched', component: WatchedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
