
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Cow } from '../../models/cow.model';
import { CowService } from '../../services/cow.service';

@Component({
  selector: 'app-cow-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cow-detail.html',
  styleUrl: './cow-detail.scss',
})
export class CowDetail implements OnInit {
  cow?: Cow;

  constructor(private route: ActivatedRoute, private cowService: CowService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cow = this.cowService.getCowById(id);
  }
}
