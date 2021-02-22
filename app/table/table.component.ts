import { Component, OnInit } from '@angular/core';
import { ApiService} from '../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

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
 const value = "table";
 const resultsWynikix = jasonowe.filter((d: any)=>d[keyso][0]==value);
 const resultsWynikix2 = jasonowe.filter((d: any)=>d[keyso][1]==value);
 console.log(resultsWynikix);
 Array.prototype.push.apply(resultsWynikix,resultsWynikix2);

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
