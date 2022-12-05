import { Component, OnInit} from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { environment } from 'src/environments/environment';
/*import { ApiResult } from 'src/app/services/event.service'; */


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})

export class EventsPage implements OnInit {
 
  events:any = [];
  currentPage = 1;
  imageBaseUrl = environment.images;
 

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

     this.eventService.getTopRatedEvents().subscribe((res) =>  {
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
  }

}
