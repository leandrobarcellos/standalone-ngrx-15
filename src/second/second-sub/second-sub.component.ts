import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { SharedData } from '../..';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'app-second-sub',
  templateUrl: './second-sub.component.html',
  styleUrls: ['./second-sub.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SecondSubComponent implements OnInit {
  constructor(private readonly router: Router, appService: AppService) {
    appService.sharedData$.pipe(
      take(1),
      map((next) => ({ ...next, inputText: `${next.inputText} é assim` })),
      map((next) => ({ ...next, inner: { ...next.inner, inputNumber: 4321 } })),
    ).subscribe(next => appService.updateStore(next));
  }

  ngOnInit() {}

  backHome() {
    this.router.navigate(['']);
  }

  backSecondHome() {
    this.router.navigate(['second']);
  }
}
