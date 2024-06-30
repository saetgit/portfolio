<template>
    <div class="mb-24">
        <div class="text-center mb-8">
            <p class="text-2xl font-semibold text-gray-800">Skills List</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
            <div v-for="skill in skills" :key="skill.id"
                class="block bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transform hover:translate-y-[-2px] transition-all duration-300">
                <p class="font-medium text-gray-900">{{ skill.name }}</p>
                <p class="text-sm text-gray-600">{{ skill.level }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFetch } from '#imports';

// متغیرهای واکنشی برای نگهداری لیست مهارت‌ها و خطاها
const skills = ref([]);
const error = ref(null);

const { data, pending, error: fetchError } = await useFetch('/api/skills');

if (!fetchError.value) {
    skills.value = data.value;
} else {
    error.value = fetchError.value;
    console.error(fetchError.value);
}
</script>

<style scoped>
</style>