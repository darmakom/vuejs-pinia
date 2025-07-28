import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({ 
    todoList : [
        {nama: 'Belajar HTML', isDone: false},
        {nama: 'Belajar CSS', isDone: false},
        {nama: 'Belajar JS', isDone: false},
        {nama: 'Belajar PHP', isDone: false},
    ]
   }),
  getters: {
    
  },
  actions: {
    setAsDone(index) {
        console.log(index)
    }
  },
})