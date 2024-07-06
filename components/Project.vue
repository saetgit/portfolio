<template>
    <div id="project" class="mb-[100px]">
        <div class="text-center mb-8">
            <p class="text-2xl font-semibold text-gray-800">Project List</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
            <div class="bg-emerald-600 text-white p-5 rounded shadow hover:shadow-lg transform hover:translate-y-1 transition-transform duration-300"
                v-for="project in projects" :key="project.id">
                <a :href="project.url" target="_blank">
                    <p class="text-[14px]">{{ project.name }}</p>
                </a>
                <p class="text-[10px]">{{ project.position }}</p>
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