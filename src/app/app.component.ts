import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'heroes-list';
  title = 'Dorn-Heroes';
  imageUrl = 'url(https://i.postimg.cc/9QrPCsyD/d8foswh-1d3d414c-be37-420d-bfcc-4f7e4554f3ab.png)'

  constructor(private router: Router) {
    router.events
    .pipe(filter(event => event instanceof NavigationStart), map(e => e as NavigationStart))
    .subscribe((event: NavigationStart) => {
      console.log(event)
      if(event.url === '/heroeslist') {
        this.imageUrl = 'url()'
      } else if(event.url === '/alexis-polux') {
        this.imageUrl = 'url()'
      } else if(event.url === '/fafnir-rann') {
        this.imageUrl = 'url()'
      } else if(event.url === '/sigismund') {
        this.imageUrl = 'url()'
      }  else if(event.url === '/tor-garadon') {
        this.imageUrl = 'url()'
      }  else if(event.url === '/dorn') {
        this.imageUrl = 'url(https://www.wargamer.com/wp-content/uploads/2022/04/warhammer-40k-rogal-dorn-resolute.jpg)'
      }

    }

    )};

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
