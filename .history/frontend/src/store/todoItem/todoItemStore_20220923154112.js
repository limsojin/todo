import axios from 'axios';
import store from './store/index';

const state = () => ({
  todoList: [],
  todoOldestOrder: true,
  planPick: '',
  doneTodo: '',
  totalTodo: '',
  radioCheckTodo: '',
  radioCheckIdx: '',
});
const getters = {
  todoList: (state) => state.todoList,
  totalTodo: (state) => state.todoList.filter((todoList) => todoList.done),
  totalTodoCount: () => getters.totalTodo.length,
  doneTodo: (state) => state.todoList.filter((todoList) => !todoList.done),
  doneTodoCount: () => getters.todoList.length,
  planPick: (state) => state.planPick,
};
const actions = {
  /**
   * create
   * @param {*} param0
   * @param {*} payload
   */
  addTodo: ({ commit }, payload) => {
    const jsonVal = {
      item: payload,
      completed: false,
    };

    axios
      .post('/todo/', JSON.stringify(jsonVal))
      .then((res) => {
        commit('addTodo', res.data);
      })
      .error((err) => {
        console.log(err);
      });
  },
  /**
   * read
   * @param {*} param0
   */
  getTodo: ({ commit }) => {
    axios
      .get('/todo/')
      .then((res) => {
        console.log(res);
        commit('getTodo', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  /**
   * update
   * @param {*} param0
   * @param {*} payload
   */
  doneToggle: ({ commit }, payload) => {
    /* const doneData = {
      id: payload.index,
      todo: payload.todo,
      completed: !payload.completed,
    }; */
    axios
      .patch(`/todo/${payload.id}`)
      .then((res) => {
        console.log(res);
        commit('updateTdoo', payload);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  /**
   * delete
   * @param {*} param0
   * @param {*} payload
   */
  deleteTodo: ({ commit }, payload) => {
    axios
      .delete(`/todo/${payload}`)
      .then((res) => {
        console.log(res);
        commit('deleteTodo', payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  deleteAll: ({ commit }) => {
    const todoItem = state.todoList;
    if (todoItem.length > 0) {
      axios
        .delete('/todo/clear')
        .then((res) => {
          console.log(res);
          commit('deleteTodoAll');
        });
    }
  },
  exportSelected: (state, payload) => { // Todolist.vue의 radioChange에서 넘어온 값
    state.radioCheckTodo = payload.todo;
    state.radioCheckIdx = payload.idx;
  },
};

const mutations = {
  addTodo(state, todo) {
    state.todoList = [...state.todoList, todo];
    index.fetch(state.todoOldestOrder);
  },
  getTodo(state, data) {
    state.todoList = data;
  },
  doneToggle(state, id) {
    const idx = state.todoList.findIndex((item) => item.id === id);
    state.todoList[idx].done = !state.todoList[idx].done;
  },
  deleteTodo(state, id) {
    state.todoList = state.todoList.filter(
      (t) => t.id !== id,
    );
  },
  deleteTodoAll(state) {
    index.fetch(state.todoOldestOrder);
    state.todoList = [];
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
