import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';

const routes: Routes = [
  {
    path: 'passGenerator',
    component: PasswordGeneratorComponent,
  },
  {
    path: 'pokemon',
    component: PokemonComponent,
  },
  {
    path: 'rickandmorty',
    component: RickandmortyComponent,
  },
  {
    path: '**',
    redirectTo: '/pokemon',
  },
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
