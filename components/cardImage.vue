<template>
    <div class=" flex justify-center relative group max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
            :src="getImage(image)"
            class=" max-w-[88%] max-h-72 group-hover:scale-110 transition duration-300 delay-75 ease-in-out group-hover:cursor-pointer overflow-hidden"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent opacity-0 group-hover:opacity-75 group-hover:scale-110 transition-opacity group-hover:cursor-pointer "></div>
    </div>
</template>

<script setup>
import { getImage } from '~/tools/apiTools';

const url = defineProps({
    image : String
});

</script>
