<template>
    <div>
        <p>Project List</p>
        <div class="projects-grid">
            <div class="project-card" v-for="project in projects" :key="project.id">
                <p>{{ project.name }}</p>
            </div>
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
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    padding: 10px;
}

.project-card {
    background-color: black;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: scale(1.05);
}
</style>