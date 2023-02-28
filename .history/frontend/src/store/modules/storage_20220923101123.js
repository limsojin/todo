import axios from 'axios';
import { store } from '@/store/store';

const storage = {

  /**
   * 화면의 아이템 목록 조회
   * async await 사용하여 비동기로 관리
   * axios로 서버와 통신해 /todo/true 호출하여 list 데이터를 satae의 todoItems에 저장
   * @param {*} orderState
   */
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
    store.state.todoItems = arr;
  },
};

export default storage;
