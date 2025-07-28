<template>
    <h1>ini halaman todo list</h1>

    {{ todoStore.todoList }}
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