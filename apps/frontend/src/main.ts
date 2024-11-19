import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), // Provide the router
    provideHttpClient(), // Provide the HTTP client
  ],
}).catch((err) => console.error(err));
