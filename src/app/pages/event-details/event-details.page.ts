import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: any;
  
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit( ) {

    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventDetails(id as string).subscribe(
      res => {
          this.event = res;
      }
  );
}
}