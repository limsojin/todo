<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoEdit></TodoEdit>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";

import TodoList from "./components/TodoList.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoEdit from "./components/TodoEdit.vue";

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
