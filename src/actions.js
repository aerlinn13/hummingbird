import * as actionTypes from './actionTypes';

export const requestFarms = () => ({
  type: actionTypes.API_REQUEST,
  endpoint: '5cc809b5300000a300055eac'
});

const requestFarmsInit = () => ({
  type: actionTypes.FARMS_REQUEST_INIT,
});

const requestFarmsSuccess = farm => ({
  type: actionTypes.FARMS_REQUEST_SUCCESS,
  farm
});

export const fetchFarms = () => (dispatch, getState) => {
  dispatch(requestFarmsInit());
  dispatch(requestFarms()).then((response) => {
    dispatch(requestFarmsSuccess(response.data));
  }).catch(() => {
    // console.error(error);
  });
};

export const requestCrops = () => ({
  type: actionTypes.API_REQUEST,
  endpoint: '5cc8098e300000a300055eab'
});

const requestCropsInit = () => ({
  type: actionTypes.CROPS_REQUEST_INIT,
});

const requestCropsSuccess = crops => ({
  type: actionTypes.CROPS_REQUEST_SUCCESS,
  crops
});

export const fetchCrops = () => (dispatch, getState) => {
  dispatch(requestCropsInit());
  dispatch(requestCrops()).then((response) => {
    dispatch(requestCropsSuccess(response.data));
  }).catch(() => {
    // console.error(error);
  });
}

  export const selectField = index => ({
    type: actionTypes.SELECT_FIELD,
    index
  });

  export const updateField = (fieldIndex, cropIndex) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.UPDATE_FIELD,
      fieldIndex,
      cropIndex
    });
    dispatch({
      type: actionTypes.UPDATE_YIELD
    })
  }
