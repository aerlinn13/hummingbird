import axios from 'axios';

const apiWrapper = (url) => (axios({
  method: 'get',
  url
}));

export default apiWrapper;
