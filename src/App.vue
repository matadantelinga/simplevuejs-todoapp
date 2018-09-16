<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12 text-center small-vertical-padding">
        <h1> Simple To Do List App</h1>
      </div>
    </div>
    <GetTodo></GetTodo>
    <CurrentTodos></CurrentTodos>
  </div>
</template>

<script>
import GetTodo from './components/GetTodo.vue'
import CurrentTodos from './components/CurrentTodos.vue'
export default {
  components: {
    GetTodo,
    CurrentTodos,
  }
 
}
</script>

<style lang="scss" scoped>
   @import 'sass/main.scss';
   @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
