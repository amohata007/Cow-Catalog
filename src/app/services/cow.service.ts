import { Injectable } from '@angular/core';
import { Cow } from '../models/cow.model';

@Injectable({ providedIn: 'root' })
export class CowService {
  private storageKey = 'cowCatalogData';

  //All valid pens
  readonly pens = ['North Barn', 'South Barn', 'Treatment Zone', 'Quarantine Area'];

  //Hard Coded 4 Datas, will be stored in local storage
  private defaultCows: Cow[] = [
    { id: 'COW001', sex: 'Female', pen: 'North Barn', status: 'Active', lastEventDate: '2025-11-01' },
    { id: 'COW002', sex: 'Male', pen: 'Treatment Zone', status: 'In Treatment', lastEventDate: '2025-10-29' },
    { id: 'COW003', sex: 'Female', pen: 'Quarantine Area', status: 'Deceased', lastEventDate: '2025-09-15' },
    { id: 'COW004', sex: 'Male', pen: 'South Barn', status: 'Active', lastEventDate: '2025-10-22' }
  ];

  constructor() {
    // Initialize localStorage with default data
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.defaultCows));
    }
  }

  // Returns the list of valid pen locations
  getPens() {
    return this.pens;
  }

  // Retrieves all cows from localStorage
  getAll(): Cow[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Saves the entire cow array to localStorage
  // This overwrites any existing data
  saveAll(cows: Cow[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cows));
  }

  // Adds a new cow to the catalog
  // Fetches current data, appends new cow, then saves back to localStorage
  addCow(cow: Cow): void {
    const cows = this.getAll();
    cows.push(cow);
    this.saveAll(cows);
  }

  // Finds and returns a specific cow by its ID
  getCowById(id: string): Cow | undefined {
    return this.getAll().find(c => c.id === id);
  }
}
