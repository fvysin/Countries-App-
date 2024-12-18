import api from './api';


api.get('/countries')
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
