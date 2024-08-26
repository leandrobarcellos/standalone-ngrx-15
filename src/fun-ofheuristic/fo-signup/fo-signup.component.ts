import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fo-signup',
  templateUrl: './fo-signup.component.html',
  styleUrls: ['./fo-signup.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class FoSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
