import { Injectable } from '@angular/core';

//Service file to persist the filtered data
@Injectable({ providedIn: 'root' })
export class CowFilterService {
  search: string = '';
  filterPen: string = '';
  filterStatus: string = '';
}