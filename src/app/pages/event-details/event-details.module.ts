import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { EventDetailsPageRoutingModule } from './event-details-routing.module';

import { EventDetailsPage } from './event-details.page';


@Pipe({
  name: 'time'
 })
 
 export class TimePipe implements PipeTransform {
 
 transform(value: string, args: any[]): string {
     const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
     return value.length > limit ? value.substring(0, limit) : value;
    }
 }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailsPageRoutingModule
  ],
  declarations: [EventDetailsPage, TimePipe ]
})
export class EventDetailsPageModule {}
