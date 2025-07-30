<template>
    <h1 style="margin-left: 50px;">My Todo List</h1>

    <div class="getters-button">
        <button @click="() => show = 'all'">Show All</button>
        <button @click="() => show = 'done only'">Done Only</button>
        <button @click="() => show = 'undone only'">Undone Only</button>
    </div>

    <form @submit.prevent="todoStore.addTodo(newTodo)">
        <input type="text" v-model="newTodo" id="newTodo" placeholder="add new todo...">
        <input type="submit" value="Add">
    </form>

    <!-- show all todo list -->
    <div v-if="show=='all'">
        <ul>
            <li v-for="list in todoStore.showall">
                <span>
                    {{ list.name }}</span>
                <span>
                    <button v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">Set as Done</button>
                    <button v-if="list.isDone" @click="todoStore.setAsUndone(list.name)">Set as Undone</button>
                </span>
            </li>
        </ul>
    </div>
    
    <!-- show done only todo list -->
    <div v-if="show=='done only'">
        <ul>
            <li v-for="list in todoStore.doneonly">
                <span>
                    {{ list.name }}</span>
                <span>
                    <button v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">Set as Done</button>
                    <button v-if="list.isDone" @click="todoStore.setAsUndone(list.name)">Set as Undone</button>
                </span>
            </li>
        </ul>
    </div>

    <!-- show undone only todo list -->
    <div v-if="show=='undone only'">
        <ul>
            <li v-for="list in todoStore.undoneonly">
                <span>
                    {{ list.name }}</span>
                <span>
                    <button v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">Set as Done</button>
                    <button v-if="list.isDone" @click="todoStore.setAsUndone(list.name)">Set as Undone</button>
                </span>
            </li>
        </ul>
    </div>    
</template>

<style scoped>
    .getters-button {
        display: flex;
        width: 500px;
        justify-content: center;
        margin-left: 40px;
        margin-bottom: 10px;
        gap: 10px;

    }

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
                newTodo: '',
                show: 'all'
            }
            
        }
    }
</script>