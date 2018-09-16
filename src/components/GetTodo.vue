<template>
    <div id="get-todo" class="small-vertical-padding">
        <div class="row">
            <div class="col-md-12">
            <h2>What To Do</h2>
                <div class="input-group mb-3">
                  <input class="form-control" aria-label="Task" aria-describedby="basic-addon2" :value="newTodo" @change="getTodo" placeholder="Task. . .">
                  <div class="input-group-append">
                    <button class="btn btn-info" @click="addTodo">Add Todo</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        methods: {
            getTodo(e){
                this.$store.dispatch('getTodo', e.target.value)
            },
            addTodo(){
                this.$store.dispatch('addTodo')
                this.$store.dispatch('clearTodo')
            }
        },
        computed: {
            newTodo(){
                return this.$store.getters.newTodo
            }
        }

    }
</script>