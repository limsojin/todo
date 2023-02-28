import axios from 'axios';
import storage from '@/store/index';

const state = () => ({
  todoList: [],
  todoState: true,
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
          storage.fetch(state.todo);
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
