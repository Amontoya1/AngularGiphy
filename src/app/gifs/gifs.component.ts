import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy{
  gifs: any[] = [];
  gif: any[];

  subscription: Subscription;


  constructor( private Dataservice: DataService) { }

  ngOnInit(): void {
    this.Dataservice.getTrendingGifs();
    this.subscription = this.Dataservice.getGifs()
    .subscribe((response: any) =>{
      this.gifs = response;
    });
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();

  }
}
