import axios from 'axios';
import storage from '@/store/modules/storage';

const state = () => ({
  todoList: [],
});

const actions = {
  addTodo({ commit }, payload) {
    const jsonVal = {
      list: payload,
      completed: false,
    };
    axios
      .post('/todo/', JSON.stringify(jsonVal))
      .then((res) => {
        if (res.data == 'ok') {
          st;
        }
      });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
