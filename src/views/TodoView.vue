<template>
    <h1>ini halaman todo list</h1>

    <form @submin.prevent="todoStore.addTodo(newTodo)">
        <input type="text" v-model="newTodo" placeholder="add new todo...">
        <input type="submit" value="Add">
    </form>

    <ul>
        <li v-for="(list, index) in todoStore.todoList">
            <span>
                {{ list.name }}</span>
            <span>
                <button v-if="!list.isDone" @click="todoStore.setAsDone(index)">Set as Done</button>
                <button v-if="list.isDone" @click="todoStore.setAsUndone(index)">Set as Undone</button>
            </span>
        </li>
    </ul>
</template>

<style scoped>
    ul {
        list-style: none;
        width: 500px;
    }

    li {
        border: solid 1px;
        margin: 10px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
</style>

<script>
    import { useTodoStore } from '@/stores/todoStore';

    export default {
        setup() {
            const todoStore = useTodoStore()

            return { todoStore }
        },
        data() {
            return {
                newTodo: ''
            }
        }
    }
</script>