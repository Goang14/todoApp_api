import axios from 'axios'
const state ={
  todos:[{
    done:true
  }]
};

const getters = {
  allTodos: (state) =>{
    return state.todos
  }
};

const mutations = {
    setTodos: (state, todos) => {
      (state.todos = todos)
    },
    removeTodo:(state,id) => {
      state.todos = state.todos.filter((todo) => todo._id !== id)
    },
    updateTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo._id === updatedTodo._id);
        if (index !== -1) {
          state.todos[index]= updatedTodo;
          state.todos = [...state.todos];
        }
    },
    addTodo:(state,newTodo) => {
      state.todos = [newTodo,...state.todos]
    }
};

const actions = {
  //lay du lieu
  async fetchTodos({ commit }) {
    const {data} = await axios.get(`http://localhost:5000/student`);
    commit('setTodos', data);
  },
  //sua
  async editTodo({ commit }, updatedTodo) {
    const {data} = await axios.put(`http://localhost:5000/student/${updatedTodo._id}`, updatedTodo);
    commit('updateTodo', data);
  },
  //xoa
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:5000/student/${id}`);
    commit('removeTodo', id);
  },
  //them
  async addTodo({commit},model){
    const {data} = await axios.post(`http://localhost:5000/student/create`, model);
    commit('addTodo', data)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
};

