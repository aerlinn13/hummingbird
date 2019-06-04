import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import { initialState } from './model';
import { calculateYield } from './helpers.js';


function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FARMS_REQUEST_INIT:
      return state.set('isFetchingFarms', true);
    case actionTypes.FARMS_REQUEST_SUCCESS:
      return state.merge({
        isFetchingFarms: false,
        farm: {
          name: action.farm.name,
          centre: action.farm.centre
        },
        fields: action.farm.fields
      });
    case actionTypes.CROPS_REQUEST_INIT:
      return state.set('isFetchingCrops', true);
    case actionTypes.CROPS_REQUEST_SUCCESS:
        return state.merge({
          isFetchingCrops: false,
          crops: action.crops
      });
    case actionTypes.SELECT_FIELD:
        return state.set('selectedField', state.get('fields')[action.index]);
    case actionTypes.UPDATE_FIELD:
      return state
      .setIn(['selectedCrops', action.fieldIndex], action.cropIndex)
      .set('selectedField', null)
    case actionTypes.UPDATE_YIELD:
      return state
      .set('yield', calculateYield(state.get('fields'), state.get('crops'), state.get('selectedCrops')))
    default:
      return state;
  }
}

export default reducer;
