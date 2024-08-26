import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AppComponent {
  readonly router = inject(Router);

  title = 'navigation-15';

  navToFunOfheuristicUser() {
    this.router.navigate(['fun-ofheuristic']);
  }

  navToKkMessages() {
    this.router.navigate(['kamil-konopka']);
  }
}
