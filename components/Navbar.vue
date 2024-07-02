<template>
    <div>
        <nav class="bg-emerald-600 p-4 text-white fixed w-full z-10">
            <button @click="toggleMenu" class="block md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <ul :class="{ 'hidden': !isOpen, 'flex': isOpen }" class="flex-col md:flex-row md:flex">
                <li class="pr-2"><a href="#">Home</a></li>
                <li class="pr-2"><a href="#">Project</a></li>
                <li class="pr-2"><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>