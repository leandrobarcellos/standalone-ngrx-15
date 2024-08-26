import { updateUser } from './../../store/fo-user/user.actions';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { addUser } from 'src/store/fo-user/user.actions';
import { firstUserSelector, User, usersSelector, UserState } from 'src/store/fo-user/user.reducers';

@Component({
  selector: 'app-fo-user',
  templateUrl: './fo-user.component.html',
  styleUrls: ['./fo-user.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
})
export class FoUserComponent implements OnInit {
  private readonly store = inject(Store<UserState>);
  readonly users$ = this.store.select(usersSelector);
  readonly firstUser$ = this.store.select(firstUserSelector);

  ngOnInit() {}

  createUser() {
    const user: User = {
      userId: new Date().getMilliseconds(),
      name: 'Subrat',
    };
    this.store.dispatch(addUser(user));
  }

  updateUser() {
    this.firstUser$.pipe(take(1)).subscribe(user => this.store.dispatch(updateUser({
      ...user,
      name: 'newName',
    })));
  }
}
