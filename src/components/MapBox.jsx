import React from 'react';
import { Map, TileLayer, ZoomControl, GeoJSON, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import turf from 'turf';


class MapBox extends React.Component {

  componentWillMount() {
    this.props.fetchFarms();
    this.props.fetchCrops();
  }

  render() {
    const {
      farm,
      fields,
      selectedField
     } = this.props;

    if (!farm) {
      return null;
    }

    let fieldCentroid;
    if (selectedField) {
      const polygon = turf.polygon([[...selectedField.boundary.coordinates[0]]])
      fieldCentroid = turf.centroid(polygon).geometry.coordinates.reverse();
    }

    return(
      <Map
        style={{ width: '100vw', height: '100vh' }}
        center={selectedField ? fieldCentroid : farm.centre.coordinates}
        zoom={selectedField ? 16 : 13}
        zoomControl={false}
      >
      <ZoomControl position="bottomright" />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {fields && fields.map(field => <GeoJSON key={field.name} data={field.boundary} />)}
      </Map>
    );
  }
}

export default MapBox;
