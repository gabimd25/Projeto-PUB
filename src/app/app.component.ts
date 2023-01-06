import { Component } from '@angular/core';
import { ActivatedRoute,Event, Navigation, NavigationEnd, Router, UrlTree } from '@angular/router';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pub-angular';

  loginActive = true;

  currentRoute: string;
  constructor(private router: Router) {
    this.currentRoute = "Demo";
    this.router.events.subscribe((event: Event) => {

        if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
              console.log(event);
        }


    });
  }
}
