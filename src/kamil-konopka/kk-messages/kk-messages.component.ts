import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs';
import { KkMessage } from 'src/kamil-konopka';
import { kkAddMessage, kkDeleteMessage } from 'src/store/kk-messages/kk-messages.actions';
import { kkSelectMessages } from 'src/store/kk-messages/kk-messages.selectors';

@Component({
  selector: 'app-kk-messages',
  templateUrl: './kk-messages.component.html',
  styleUrls: ['./kk-messages.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class KkMessagesComponent implements OnInit {
  private readonly store: Store = inject(Store<KkMessage>);
  private readonly messages$ = this.store.select(kkSelectMessages);
  addMessage(): void {
    const message: KkMessage = {
      id: `${new Date().getMilliseconds()}`,
      publishDate: new Date(),
    };
    this.store.dispatch(kkAddMessage({ message }));
  }

  deleteMessage() {
    this.messages$
      .pipe(
        take(1),
        tap((msgs) => console.log('deleteMessage', msgs)),
        filter((msgs) => msgs?.length > 0)
      )
      .subscribe((msgs) => this.store.dispatch(kkDeleteMessage({id: msgs[0].id})));
  }

  ngOnInit(): void {}
}
