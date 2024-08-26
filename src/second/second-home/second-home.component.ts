import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-home',
  templateUrl: './second-home.component.html',
  styleUrls: ['./second-home.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SecondHomeComponent implements OnInit {
  constructor(private readonly router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  goSecondSub() {
    this.router.navigate(['second-sub'], { relativeTo: this.route });
  }
}
