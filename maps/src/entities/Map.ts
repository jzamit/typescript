import { Location, Localizable } from '../types';

const uruguayCoordinates: Location = {
  lat:-32.3329,
  lng:-55.484211
};

const mapDefaultOptions: google.maps.MapOptions = {
  zoomControl: true,
  zoom:7,
  center: uruguayCoordinates
}

// Facade Pattern, allow us to hide and protect implementation details, in this case protect for direct access to Google Maps methods.
export class Map {
  private googleMap: google.maps.Map;

  constructor(element?: Element, private mapOptions?: google.maps.MapOptions) {
    this.mapOptions = mapOptions ? mapOptions : mapDefaultOptions;
    this.googleMap = new google.maps.Map(element ? element : document.getElementById('map'), this.mapOptions);
  }

  addMarker(localizable: Localizable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: localizable.location
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: localizable.info
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}