import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title = 'our-project';
streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  detectRetina: true,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
  detectRetina: true,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

layersControl = {
  baseLayers: {
    'street Maps': this.streetMaps,
    'wikimedia Maps': this.wMaps
  }
};

options = {
  layers: [ this.streetMaps],
  zoom: 7,
  center: latLng([ 46.879966, -121.726909 ])
};

drawItems: L.FeatureGroup = L.featureGroup();

drawOptions = {
position: 'topright',
edit: {
  featureGroup: this.drawItems
}
};


ngOnInit() {

}
ionViewDidEnter(){
}


onMapReady(map: L.Map) {
  setTimeout(() => {
     map.invalidateSize();
  }, 200);
}
}
