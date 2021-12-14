import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tache } from '../taches';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  tacheList = tache ;
  tache : any;
   idth=this.route.snapshot.params.tacheid;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    for (var th of this.tacheList) {

      if(th.id==this.idth){
        this.tache =th ;
      }
    }
  }

}