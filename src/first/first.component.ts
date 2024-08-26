import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { provideRouter, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
