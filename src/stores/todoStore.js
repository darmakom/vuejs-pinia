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
    
  },
  actions: {
    setAsDone(index) {
        this.todoList[index].isDone = true
    },
    setAsUndone(index) {
        this.todoList[index].isDone = false
    },
    addTodo(data) {
      this.todoList.push (
        { name:data, isDone: false }
      )
    },
  },
})