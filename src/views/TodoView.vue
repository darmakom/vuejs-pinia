<template>
    <h1 style="margin-left: 50px;">My Todo List</h1>

    <form @submit.prevent="todoStore.addTodo(newTodo)">
        <input type="text" v-model="newTodo" id="newTodo" placeholder="add new todo...">
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
    form {
        width: 500px;
        margin-left: 50px;
    }

    form input {
        padding: 10px;
    }

    form input:first-child {
        width: 80%;
        margin-right: 9px;
    }

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