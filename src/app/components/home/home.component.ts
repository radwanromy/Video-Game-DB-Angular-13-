import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort!: string;
  public games?: Array<Game>;
  constructor(
    private httpService: HttpService,
    private activatedRout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>
    {
      if(params['game-search']){
        this.searchGames('metacrit',[params['game-search']]);
      }else{
        this.searchGames(metacrit);
      }
    });
  }
  searchGames(sort: string, search?:string)

}
