<template>
    <div>
        <p>Project List</p>
        <div class="bg-black" v-for="project in projects" :key="project.id">
            <p>{{ project.name }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFetch } from '#imports';

const projects = ref([]);

const { data, error } = await useFetch('/api/projects');

if (!error.value) {
    projects.value = data.value;
} else {
    console.error(error.value);
}
</script>

<style scoped>
.bg-black {
    background-color: black;
    color: white;
    padding: 10px;
    margin: 5px 0;
}
</style>