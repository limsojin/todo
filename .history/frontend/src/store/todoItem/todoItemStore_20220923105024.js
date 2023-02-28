import axios from 'axios';

const state = () => ({
  todoList: [],
});

const actions = {
  addTodo({ commit }, payload) {
    return axios
      .get('/todo/${payload}')
      .then((res) => res.data)
      .catch((err) => console.error(err));
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
