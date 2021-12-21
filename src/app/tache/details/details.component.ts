import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  tache : any;
   idth=this.route.snapshot.params.tacheid;
  constructor(private route: ActivatedRoute, private tacheservice: TacheService) { }

  ngOnInit(): void { 
    this.tacheservice.get(this.idth).subscribe(
      res => this.tache = res
    );
    }
  }

