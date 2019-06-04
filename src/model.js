import { Map } from 'immutable';

export const initialState = Map({
  isFetchingCrops: false,
  isFetchingFarms: false,
  farm: null,
  crops: null,
  fields: null,
  selectedField: null,
  selectedCrops: Map({}),
  yield: Map({})
});
