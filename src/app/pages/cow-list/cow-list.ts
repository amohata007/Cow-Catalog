
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cow } from '../../models/cow.model';
import { CowService } from '../../services/cow.service';
import { CowFilterService } from '../../services/cowFilter.service';

@Component({
  selector: 'app-cow-list',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cow-list.html',
  styleUrl: './cow-list.scss',
})
export class CowList implements OnInit{
  cows: Cow[] = [];

  constructor(private cowService: CowService, public filterService: CowFilterService) {}

  ngOnInit() {
    this.loadCows();
  }

  // Fetches all cows from the service (which reads from localStorage)
  loadCows() {
    this.cows = this.cowService.getAll();
  }

  //Filter Logic
  get filteredCows(): Cow[] {
    const { search, filterPen, filterStatus } = this.filterService;
    return this.cows.filter(c =>
      c.id.toLowerCase().includes(search.toLowerCase()) &&
      (filterPen ? c.pen === filterPen : true) &&
      (filterStatus ? c.status === filterStatus : true)
    );
  }

}
