import { API_REQUEST } from '../actionTypes';
import apiWrapper from './apiWrapper';

const apiMiddleware = ({ getState }) => next => (action) => {
  const { type, endpoint } = action;
  if (type == API_REQUEST) {
    const url = 'http://www.mocky.io/v2/' + endpoint;
    return apiWrapper(url);
  }
  return next(action);
};

export default apiMiddleware;
