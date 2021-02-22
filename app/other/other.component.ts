import { Component, OnInit } from '@angular/core';
import { ApiService} from '../app.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})


export class OtherComponent implements OnInit {

  articlesy: any;
  jakiesy: any;
  jackpociky: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
 this.apiService.getNews().subscribe((datay)=>{
  
 console.log(datay);
 this.jakiesy = datay;
 console.log(this.jakiesy);
 const jasonowey = this.jakiesy;
 console.log(jasonowey);
 const keysoy = "categories";
 const valuey = "ball";
 const valuey2 = "virtual";
 const valuey3 = "fun";
 const resultsWynikixy = jasonowey.filter((d: any)=>d[keysoy]==valuey);
 const resultsWynikixy2 = jasonowey.filter((d: any)=>d[keysoy]==valuey2);
 const resultsWynikixy3 = jasonowey.filter((d: any)=>d[keysoy]==valuey3);
 console.log(resultsWynikixy);
 Array.prototype.push.apply(resultsWynikixy,resultsWynikixy2);
 Array.prototype.push.apply(resultsWynikixy,resultsWynikixy3);


 this.articlesy = resultsWynikixy;
     });
    window.setInterval(()=>{  
    this.apiService.getJackpot().subscribe((dataxy)=>{
    console.log(dataxy);
    this.jackpociky = dataxy;
          });
        },1000);
          
  }

}
