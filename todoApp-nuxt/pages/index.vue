<template>
    <div class="product">  
      <h1 text-align="center">TodoApp</h1>
      <FormView :edit="itemEdit" @closeForm="itemEdit = null" /> <br>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th> 
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in allTodos" :key="todo._id">
            <th>{{ todo.id }}</th>
            <td>{{ todo.name }}</td>
            <td>{{ todo.age }}</td>
            <td>{{ todo.address }}</td>
             <td><button v-on:click="deleteTodo(todo._id)">Delete</button></td>
            <td><button @click = "()=>clickEdit(todo)" >Edit</button></td>
          </tr>   
        </tbody>
      </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FormView from '../components/FormView.vue'

export default {
  components:{
    FormView,
  },
  name: "TodoApp",
  methods:{
    ...mapActions(["fetchTodos","deleteTodo","editTodo"]),

    clickEdit(item) {
      this.$bvModal.show("modal-prevent-closing");
      this.itemEdit = item;
    }
  },
  data(){
    return{
      itemEdit:null
    }
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>
