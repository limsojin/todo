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
    }

    axios
      .post('/todo/', JSON.stringify(jsonVal))
      .then((res) => {
          storage.fetch(state.todoState);
      }),
  })
};


export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
