import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-home',
  templateUrl: './first-home.component.html',
  styleUrls: ['./first-home.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class FirstHomeComponent implements OnInit {
  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {}

  ngOnInit() {}

  toFirstSub() {
    this.router.navigate(['first-sub'], {relativeTo: this.route});
  }
}
