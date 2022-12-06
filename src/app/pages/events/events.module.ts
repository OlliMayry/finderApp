import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Pipe({
  name: 'truncate'
 })
 
 export class TruncatePipe implements PipeTransform {
 
 transform(value: string, args: any[]): string {
     const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
     const trail = args.length > 1 ? args[1] : '...';
     return value.length > limit ? value.substring(0, limit) + trail : value;
    }
 }

 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [EventsPage, TruncatePipe]
})
export class EventsPageModule {}
