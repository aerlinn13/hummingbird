import { Map } from 'immutable';

export const calculateYield = (fields, crops, selectedCrops = Map({}) ) => fields.map(
  (field, index) => {
    const crop = crops[selectedCrops.get(index)];
    let y = 0;
    if (crop) {
      y = (crop.expected_yield * field.hectares) / (crop.disease_risk_factor * field.disease_susceptibility) * crop.price_per_tonne;
    }
    return Math.floor(y * 100) / 100;
  }
)
