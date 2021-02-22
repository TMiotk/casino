import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

export interface Gry {
  categories: string;
  name: string;
  image: string;
  id: string;
}

export interface Jackpoty {
  game: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

API_KEY = '6e0fa28fd6mshc3df24ec4f9b191p173de2jsn76213eb8d84c';
 
constructor(private httpClient: HttpClient) { }
public porownaj(){
  const pierwsza = this.httpClient.get(`http://stage.whgstage.com/front-end-test/games.php`);
  const druga = this.httpClient.get(`http://stage.whgstage.com/front-end-test/jackpots.php`);

   
}

  public getNews(){
    return this.httpClient.get(`http://stage.whgstage.com/front-end-test/games.php`);
  }

 
  public getJackpot(){
    
    return this.httpClient.get(`http://stage.whgstage.com/front-end-test/jackpots.php`);
 
 
  }


}
