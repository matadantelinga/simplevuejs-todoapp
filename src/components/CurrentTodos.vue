<template>
    <div id="current-todos" class="row">
        <div class="col-md-12">
            <h3 v-if="todos.length > 0">There is {{todos.length}} Task To Do</h3>
            <div id="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="text-center header">Task</th>
                    <th scope="col" class="text-center header">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="todo in todos">
                    <td > {{todo.body}} </td>
                    <td class="text-center"> <button type="button" @click="edit(todo)" class="btn btn-warning">
                    <span class="glyphicon glyphicon-edit"></span> Edit
                    </button>
                    <button type="button" @click="remove(todo)" class="btn btn-danger">
                    <span class="glyphicon glyphicon-remove-circle"></span> Remove
                    </button></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    methods: {
        edit(todo){
            this.$store.dispatch('editTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        todos(){
            return this.$store.getters.todos
        }
    }
}
</script>