
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Cow } from '../../models/cow.model';
import { CowService } from '../../services/cow.service';

@Component({
  selector: 'app-cow-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './cow-form.html',
  styleUrl: './cow-form.scss',
})
export class CowForm {
  cow: Cow = {
    id: '',
    sex: 'Female',
    pen: '',
    status: 'Active',
    weight: undefined,
    lastEventDate: new Date().toISOString().split('T')[0],
  };

  pens: string[] = [];

  idNotUnique = false;
  penInvalid = false;

  constructor(private cowService: CowService, private router: Router) {}

  ngOnInit() {
    this.pens = this.cowService.getPens();
  }

  checkUniqueId() {
    this.idNotUnique = !!this.cowService.getCowById(this.cow.id);
  }

  validatePen() {
    this.penInvalid = !this.pens.includes(this.cow.pen);
  }

  save() {
    if (
      !this.cow.id ||
      !this.cow.pen ||
      this.idNotUnique ||
      this.penInvalid
    ) {
      return;
    }

    this.cowService.addCow(this.cow);
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
