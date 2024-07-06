<template>
    <div class="flex justify-center px-5 items-center text-emerald-600 pt-[80px] mb-8">
        <div class="pr-[100px]">
            <p>I am sara etemadian</p>
            <b>Front-end developer</b>
            <div class="mt-4">
                <a :href="pdfLink" download
                    class="inline-block px-3 py-3 bg-black text-white no-underline rounded transition-transform transform hover:bg-gray-800 hover:scale-105 shadow-md hover:shadow-lg">
                    Download Resume
                </a>
            </div>

        </div>
        <div>
            <img src="../static/img/person-sara-etemadian.jpg" class="rounded-[50%]  w-[200px]" alt="person" />
        </div>
    </div>
</template>

<script setup>
const pdfLink = ref('/doc/Sara_Etemadian_v1.pdf'); // مسیر فایل PDF شما

</script>

<style scoped></style>