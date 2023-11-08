<template>
    <NuxtLink :to="`./movie/${id}`">
    
        <div class="border border-gray-700 flex justify-center relative group overflow-hidden bg-cover bg-no-repeat">
            <img
                :src="getImage(image)"
                class=" sm:max-h-72  group-hover:scale-110 transition duration-300 delay-75 ease-in-out group-hover:cursor-pointer overflow-hidden"
            >

            <Icon class="absolute z-50 opacity-0 top-[40%] group-hover:opacity-100 group-hover:cursor-pointer" color="white" size="50px" name="material-symbols:play-arrow-outline" />
            <div class="absolute inset-0 bg-gradient-to-t from-red-500 shadow-lg shadow-red-500/50 to-transparent opacity-0 group-hover:opacity-75 group-hover:scale-110 transition-opacity group-hover:cursor-pointer "></div>
        </div>
    </NuxtLink>
</template>

<script setup>
import { getImage } from '~/tools/apiTools';

const url = defineProps({
    image : String,
    id : Number
});

</script>
