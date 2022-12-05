import { Component, OnInit} from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { environment } from 'src/environments/environment';
/*import { ApiResult } from 'src/app/services/event.service'; */


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})

export class EventsPage implements OnInit {
  art:any = [];
  sport:any = [];
  music:any = [];
  events:any = [];
  currentPage = 1;
  imageBaseUrl = environment.images;
  apiKey = environment.apiKey;
 

  constructor(private eventService: EventService, private loadingCtrl: LoadingController) {}

  ngOnInit() {
   this.loadEvents();
  }

  async loadEvents(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();

     this.eventService.getTopRatedEvents(this.currentPage).subscribe((res) =>  {
      loading.dismiss();
   
      const obj = res._embedded;
/*       for (let key of Object.keys(this.events)) {
        console.log(obj[0]);
      } */
      for (let key in obj) {
        this.events.push(...res._embedded[key]);
        console.log(obj[key]);
        
      }
    });

    this.eventService.getMusicEvents(this.currentPage).subscribe((res) =>  {
      loading.dismiss();
      const obj = res._embedded;

      for (let key in obj) {
      this.music.push(...res._embedded[key]);
      console.log(res);
      }
      
    });

    this.eventService.getSportEvents(this.currentPage).subscribe((res) =>  {
      loading.dismiss();
      const obj = res._embedded;

      for (let key in obj) {
      this.sport.push(...res._embedded[key]);
      console.log(res);
      }
      
    });

    this.eventService.getArtEvents(this.currentPage).subscribe((res) =>  {
      loading.dismiss();
      const obj = res._embedded;

      for (let key in obj) {
      this.art.push(...res._embedded[key]);
      console.log(res);
      }
      
    });
    
  }
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadEvents();
  }
}
