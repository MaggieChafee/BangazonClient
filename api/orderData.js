/* eslint-disable import/prefer-default-export */
import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getOpenOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/customers/${id}/openOrders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export { getOpenOrder };
