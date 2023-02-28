import axios from 'axios';

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
      .then(res => { 
        if (res.data =='ok')
      })
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
