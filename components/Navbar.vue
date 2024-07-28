<template>
    <div>
        <nav class=" p-4 bg-white text-[#4B5563] fixed w-full z-10 flex justify-between flex-row-reverse items-center">
            <div>
                <button @click="toggleMenu" class="block md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <ul :class="{ 'hidden': !isOpen, 'flex': isOpen }"
                    class="text-[16px] flex-col md:flex-row-reverse md:flex">
                    <div class="block md:hidden">
                        <p class="text-[#111827] text-[30px] font-bold">
                            SE
                        </p>
                    </div>
                    <li class="pr-3"><a
                            class="text-[16px] bg-[#111827] text-white w-[136px] h-[36px] rounded-[12px] px-[16px] py-[6px]">Download
                            CV</a></li>
                    <li class="px-3 border-l-2 border-l-[#F3F4F6]"><img src="../static/icons/light.svg" alt="light" />
                    </li>
                    <li class="pr-3"><a href="#contact">Contact</a></li>
                    <li class="pr-3"><a href="#project">Project</a></li>
                    <li class="pr-3"><a href="#skill">Skill</a></li>
                    <li class="pr-2"><a href="#education">Education</a></li>
                </ul>
            </div>
            <div class="hidden md:block">
                <p class="text-[#111827] text-[30px] font-bold">
                    SE
                </p>
            </div>
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

<style scoped></style>