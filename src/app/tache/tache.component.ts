import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  public tacheList : any =[];
  constructor( private tacheservice:TacheService ) {}

  ngOnInit(): void {
    this.tacheservice.all().subscribe(
      res => this.tacheList = res
    );
  }
}
