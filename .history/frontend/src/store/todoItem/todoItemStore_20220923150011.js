import axios from 'axios';
import index from '@/store/index';

const state = () => ({
  todoList: [],
  todoOldestOrder: true,
  doneTodo: '', // 완료된 투두 개수
  totalTodo: '', // 총 투두 개수
  radioCheckTodo: '', // todolist.vue에서 넘어온 selected todo값
  radioCheckIdx: '', // tolist.vue에서 selected index값
});
const getters = {
  todoList: (state) => state.todoList,
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
    const doneData = {
      id: payload.todo.id,
      completed: !payload.todo.completed,
    };
    axios
      .patch(`/todo/${payload.id}`, JSON.stringify(doneData))
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
        .put('/todo/clear')
        .then((res) => {
          console.log(res);
          commit('deleteTodoAll');
        });
    }
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
