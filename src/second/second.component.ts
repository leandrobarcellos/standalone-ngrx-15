import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SecondComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
