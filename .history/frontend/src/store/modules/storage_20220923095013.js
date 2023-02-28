import axios from 'axios';
import { store } from '@/store/store';

const storage = {
  async fetch(orderState) {
    let setState = true;
    const arr = [];

    if (orderState === undefined || orderState === null) {
      setState = true;
    } else if (orderState != null || orderState !== '') {
      setState = orderState;
    }

    await axios
      .get(`/todo/${setState}`)
      .then((res) => {
        const jsonData = res.data;

        if (jsonData.legth > 0) {
          for (let i = 0; i < jsonData.length; i++) {
            arr.push(jsonData[i]);
          }
        }
      });
  },
};
