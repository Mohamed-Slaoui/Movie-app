<template>
    <div class="w-full min-h-screen text-white bg-gray-950 space-y-1 overflow-hidden font-primary">
        <Hero2/>
        <div class="text-white font-primary">
            <h1 class="font-bold text-2xl text-center py-2">Discover Series</h1>
        </div>

        <DiscoverMovies 
        :api_key="getAllTvshow()" 
        class="px-1"/>

    </div>
</template>


<script setup>
import { getAllTvshow } from '~/tools/apiTools'; 

useSeoMeta({
    title: 'Series',
});



</script>