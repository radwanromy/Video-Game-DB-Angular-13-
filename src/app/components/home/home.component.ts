import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  }

}
