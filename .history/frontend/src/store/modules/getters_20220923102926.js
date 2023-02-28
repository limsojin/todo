const todoItems = (state) => state.todoItems;
const doneTodoCount = (state, getters) => getters.todoItems.length;
const totalTodo = (state) => state.todoItems.filter(todoList => todoList.done
const totalTodoCount = (state, getters) => getters.totalTodo.length;

const todo = (state) => state.todo;
