import axios from 'axios';
import store from '@/store/index';

const addTodo = async (state, todoItem) => {
  const jsonVal = {
    todoItem,
    completed: false,
  };
  await axios
    .post('/todo/save', JSON.stringify(jsonVal));
};
