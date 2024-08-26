import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KkMessage } from '.';
import { kkSelectMessages } from 'src/store/kk-messages/kk-messages.selectors';

@Component({
  selector: 'app-kamil-konopka',
  templateUrl: './kamil-konopka.component.html',
  styleUrls: ['./kamil-konopka.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class KamilKonopkaComponent implements OnInit {
  private readonly store = inject(Store<KkMessage>);
  readonly messages$ = this.store.select(kkSelectMessages);

  constructor() { }

  ngOnInit() {
  }

}
