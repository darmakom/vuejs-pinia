import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({ 
    todoList : [
        {name: 'Belajar HTML', isDone: false},
        {name: 'Belajar CSS', isDone: false},
        {name: 'Belajar JS', isDone: false},
        {name: 'Belajar PHP', isDone: false},
    ]
   }),
  getters: {
    showall(state) {
        return state.todoList
    },
    doneonly(state) {
      return state.todoList.filter(item => item.isDone == true)
    },
    undoneonly(state) {
      return state.todoList.filter(item => item.isDone == false)
    }
  },
  actions: {
    setAsDone(name) {
        this.todoList.find(item => item.name == name).isDone = true
    },
    setAsUndone(name) {
        this.todoList.find(item => item.name == name).isDone = false
    },
    addTodo(data) {
      let exists = this.todoList.filter(item => item.name == data).length
      if(exists) {
        alert('new todo is existed in data')
        return
      }
      this.todoList.push(
        { name: data, isDone: false}
      )
      
    },
  },
})