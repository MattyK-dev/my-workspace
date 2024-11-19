import { Component, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  greeting = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGreeting().subscribe((data) => {
      this.greeting = data.message;
    });
  }
}
