<template>
    <div class="mb-[100px]">
        <div>
            <p class="text-xl font-bold mb-4">Project List</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
            <div class="bg-emerald-600 text-white p-5 rounded shadow hover:shadow-lg transform hover:translate-y-1 transition-transform duration-300"
                v-for="project in projects" :key="project.id">
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

<style scoped></style>