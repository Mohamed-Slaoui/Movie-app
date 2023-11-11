<template>
    <div class="w-full min-h-[100vh] text-white bg-gray-950 flex flex-col space-y-2 px-10 overflow-hidden">
        <div v-if="Movies && searchterm" class="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-9 lg:gap-3 sm:gap-1 place-items-center h-full">
            <CardImage 
                v-for="(movie,index) in Movies" 
                :key="movie.id" 
                :image="movie.poster_path" :id="movie.id"
                class="w-40 px-3 py-0.5"
            />
        </div>

        <div v-else class="flex justify-center items-center h-72">
            <div class="text-3xl font-bold w-72 text-center animate-pulse transition ease-in-out delay-150">Search for a Movie or TV-show ....</div>
        </div>
        

    </div>
</template>

<script setup>

import { getMovieBySearch } from "../tools/apiTools.js";
import { useSearchStore } from '../store/index.js'

let Movies = ref([]);
const stuff = useSearchStore();
const { searchterm } = storeToRefs(stuff);

watch(searchterm, async () => {
    const { data } = await useLazyFetch(getMovieBySearch(searchterm.value));
    Movies.value = data._rawValue.results;
    console.log(Movies);
})




useSeoMeta({
    title: 'Search',
});


</script>

<style scoped></style>