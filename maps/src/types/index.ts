export interface Location {
  lat: number; 
  lng: number;
};

export interface Localizable {
  location: Location;
  info?: string;
};