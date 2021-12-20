import { Component, OnInit } from '@angular/core';
import { TacheService } from '../services/tache.service';
import { tache } from './taches';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {

  public tacheList: any = [];

  constructor(
    private tacheservice:TacheService
  ) {}

  ngOnInit(): void {
    this.tacheservice.all().subscribe(
      res => this.tacheList = res
    );
  }

}
