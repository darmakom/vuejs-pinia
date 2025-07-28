<template>
    <h1>ini halaman todo list</h1>

    <ul>
        <li v-for="(list, index) in todoStore.todoList">
            <span>
                {{ list.nama }}</span>
            <span>
                <button @click="todoStore.setAsDone(index)">Set as Done</button>
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
        }
    }
</script>