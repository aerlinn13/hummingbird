import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import { selectField, updateField } from './../actions';

const mapStateToProps = state => ({
    farm: state.get('farm'),
    crops: state.get('crops'),
    fields: state.get('fields'),
    selectedField: state.get('selectedField'),
    selectedCrops: state.get('selectedCrops'),
    potentialYield: state.get('yield')
  });

const mapDispatchToProps = dispatch => ({
  selectField: (index) => {
    dispatch(selectField(index));
  },
  updateField: (fieldIndex, cropIndex) => {
    dispatch(updateField(fieldIndex, cropIndex));
  }
});

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default SideBarContainer;
