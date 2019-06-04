import { connect } from 'react-redux';
import MapBox from '../components/MapBox';
import { fetchFarms, fetchCrops } from './../actions';

const mapStateToProps = state => ({
    farm: state.get('farm'),
    fields: state.get('fields'),
    selectedField: state.get('selectedField')
  });

const mapDispatchToProps = dispatch => ({
  fetchFarms: () => {
    dispatch(fetchFarms());
  },
  fetchCrops: () => {
    dispatch(fetchCrops());
  }
});

const MapBoxContainer = connect(mapStateToProps, mapDispatchToProps)(MapBox);

export default MapBoxContainer;
