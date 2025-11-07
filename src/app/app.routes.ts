import { Routes } from '@angular/router';
import { CowList } from './pages/cow-list/cow-list';
import { CowForm } from './pages/cow-form/cow-form';
import { CowDetail } from './pages/cow-detail/cow-detail';

export const routes: Routes = [
  { path: '', component: CowList },
  { path: 'add', component: CowForm },
  { path: 'cow/:id', component: CowDetail },
  { path: '**', redirectTo: '' }
];