import { Component, OnInit } from '@angular/core';
import { ApiService} from '../app.service';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {

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

 this.articles = jasonowe;
     });

window.setInterval(()=>{

     this.apiService.getJackpot().subscribe((datax)=>{

    console.log(datax);
    this.jackpocik = datax;
          });
        }, 1000);
        
        }
}
