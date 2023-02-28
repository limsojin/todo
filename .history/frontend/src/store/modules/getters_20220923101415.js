const todoItems = (state) => state.todoItems;
const doneTodoCount = (state, getters) => getters.todoList.length;
const totalTodoCount = (state, getters) => getters.totalTodo.length;
