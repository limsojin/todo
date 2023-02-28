import axios from 'axios';
import { store } from '@/store/index';
import todoListStore from './todoItem/todoItemStore';

const storage = {
  /**
   * 화면 아이템 목록 조회
   * @param {*} orderState
   */
  async fetch(orderState) {
    let setState = true;
    /* 서버 통신 */
    const arr = [];

    if (orderState === undefined || orderState == null) {
      setState = true;
    } else if (orderState != null || orderState !== '') {
      setState = orderState;
    }

    await axios
      .get(`/todos/${setState}`)
      .then((res) => {
        const jsonData = res.data;

        if (jsonData.length > 0) {
          for (let i = 0; i < jsonData.length; i++) {
            arr.push(
              jsonData[i],
            );
          }
        }
      });

    store.state.todoItems = arr;
  },
};

export default storage;
