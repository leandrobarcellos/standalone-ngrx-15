import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fo-login',
  templateUrl: './fo-login.component.html',
  styleUrls: ['./fo-login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class FoLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
