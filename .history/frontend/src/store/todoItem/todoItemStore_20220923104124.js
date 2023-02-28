import axios from 'axios';

const state = () => ({
  todoList: [],
});

const actions = {
  addTodo({ commit }, payload) {
    return axios
      .get('/todo/${payload}')
      .then((res) => res.data);
  },
};
