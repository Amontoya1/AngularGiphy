
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getTrendingGifs () {
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=Jv3qMHsy0BUIzhi19jHIddc81YLU0st1&limit=24=pt')
    .subscribe((response: any) => {
      this.gifs.next(response.data);

    });
  }

  searchGifs (gifName: string){
    return this.http.get('https://api.giphy.com/v1/gifs/search?q=&{gifName}&api_key=Jv3qMHsy0BUIzhi19jHIddc81YLU0st1&limit=24=pt')
    .subscribe((response: any) => {
      this.gifs.next(response.data);

    });
  }

  getGifs(){
    return this.gifs.asObservable();
  }
}
