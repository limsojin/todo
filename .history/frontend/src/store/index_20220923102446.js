import Vue from 'vue';
import Vuex from 'vuex';
import storage from './modules/storage';
import * as getters from './modules/getters';
import * as mutations from './modules/mutations';
import * as actions from './modules/actions';

Vue.use(Vuex);

const store = new Vue.Store({
  state: {
    todoItems: storage.fetch(),
    doneTodo: '',
    totalTodo: '',
    radioCheckTodo: '',
    radioCheckIdx: '',
    showEditModal: '',
    showWarningModal: false,
    // showEditModal: false,
    showAddModal: false,
    pList: [{ text: '공부', value: '1' }, { text: '일', value: '2' }, { text: '취미', value: '3' }, { text: '운동', value: '4' }],
  },
  getters,
  actions,
  mutations,
});

export default { store };
