import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { usersSelector, UserState } from 'src/store/fo-user/user.reducers';

@Component({
  selector: 'app-fun-ofheuristic',
  templateUrl: './fun-ofheuristic.component.html',
  styleUrls: ['./fun-ofheuristic.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FunOfheuristicComponent implements OnInit {
  private readonly store = inject(Store<UserState>);
  readonly users$ = this.store.select(usersSelector);
  constructor() { }

  ngOnInit() {
  }

}
