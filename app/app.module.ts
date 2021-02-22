import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuGorneComponent } from './menu-gorne/menu-gorne.component';
import { FooterComponent } from './footer/footer.component';
import { MainGamesComponent } from './main-games/main-games.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { SlotsComponent } from './slots/slots.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { LiveComponent } from './live/live.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { TouletteComponent } from './toulette/toulette.component';
import { TableComponent } from './table/table.component';
import { PokerComponent } from './poker/poker.component';
import { OtherComponent } from './other/other.component';

import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [			
    AppComponent,
      MenuGorneComponent,
      FooterComponent,
      MainGamesComponent,
      TopGamesComponent,
      NewGamesComponent,
      SlotsComponent,
      JackpotsComponent,
      LiveComponent,
      BlackjackComponent,
      TouletteComponent,
      TableComponent,
      PokerComponent,
      OtherComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'blackjack', component: BlackjackComponent},
      {path: 'jackpots', component: JackpotsComponent},
      {path:'live', component: LiveComponent},
      {path: 'new-games', component: NewGamesComponent},
      {path: 'top-games', component: TopGamesComponent},
      {path: 'slots', component: SlotsComponent},
      {path: 'toulette', component: TouletteComponent},
      {path: 'table', component: TableComponent},
      {path: 'poker', component: PokerComponent},
      {path: 'other', component: OtherComponent},
      {path: '', component: TopGamesComponent}
      // ,
      // {path:'', redirectTo: 'heroes-list', pathMatch: 'full'},
      // {path: '**', component:PageNotFoundComponent}
          ]),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
