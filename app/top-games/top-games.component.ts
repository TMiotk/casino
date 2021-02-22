import { Component, OnInit } from '@angular/core';
import { ApiService} from '../app.service';



@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {

  articles: any;
  jakies: any;
  jackpocik: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    
    this.apiService.getNews().subscribe((data)=>{
  
 console.log(data);
 this.jakies = data;
 console.log(this.jakies);
 const jasonowe = this.jakies;
 console.log(jasonowe);
 const keyso = "categories";
 const value = "top";
 const resultsWynikix = jasonowe.filter((d: any)=>d[keyso][0]==value);
 console.log(resultsWynikix);
 this.articles = resultsWynikix;
     });

window.setInterval(()=>{

     this.apiService.getJackpot().subscribe((datax)=>{
       
    console.log(datax);
    this.jackpocik = datax;
 
          });
        }, 1000);

  }
}









 