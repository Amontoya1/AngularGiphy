import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string){
    if (searchTerm !== ''){
      this.DataService.searchGifs(searchTerm);
    }
  }

    }
