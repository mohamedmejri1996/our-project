import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TacheService } from 'src/app/services/tache.service';
import {tache} from '../taches'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public tacheList : any= [] ;
  tache : any;
   idth=this.route.snapshot.params.tacheid;
  constructor(private route: ActivatedRoute, private tacheservice: TacheService) { }

  ngOnInit(): void { 
    this.tacheservice.all().subscribe(
      res => this.tacheList = res
    );
    }
  }

