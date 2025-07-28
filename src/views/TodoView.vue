<template>
    <h1>ini halaman todo list</h1>

    {{ todoStore.name }}<br><br>
    {{ todoStore.doubleCount }}<br><br>
    <button @click="todoStore.increment">Add</button>
</template>

<script>
    import { useTodoStore } from '@/stores/todoStore';

    export default {
        setup() {
            const todoStore = useTodoStore()

            return { todoStore }
        }
    }
</script>