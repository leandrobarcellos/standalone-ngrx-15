import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../app/app.service';
import { take } from 'rxjs';
import { SharedData } from '../../';

@Component({
  selector: 'app-first-sub',
  templateUrl: './first-sub.component.html',
  styleUrls: ['./first-sub.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class FirstSubComponent implements OnInit {
  readonly form = new FormGroup({
    inputText: new FormControl(),
    inputDate: new FormControl(),
    inner: new FormGroup({
      inputNumber: new FormControl(),
      inputEmail: new FormControl(),
    })
  });

  constructor(private readonly router: Router, private readonly appService: AppService) {}

  ngOnInit() {
    this.appService.sharedData$.pipe(take(1)).subscribe(next => this.form.patchValue(next));
  }

  backHome() {
    this.router.navigate(['']);
  }

  goSecond() {
    this.appService.updateStore(this.form.value as SharedData);
    this.router.navigate(['second']);
  }
}
