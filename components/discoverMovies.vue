<template>
  <div class="text-white font-primary">
    <h1 class="font-bold text-2xl text-center py-2">Discover Movies</h1>
  </div>

  <div class="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 lg:gap-3 sm:gap-1 place-items-center">

    <CardImage v-for="movie in Movies" 
      :key="movie.id" 
      :image="movie.poster_path" 
      :id="movie.id" 
      class="w-40"
    />
  </div>
</template>

<script setup>
import { getAllMovies } from '~/tools/apiTools';

const { data } = await useFetch(getAllMovies);
const Movies = data._rawValue.results;
console.log(Movies);

</script>

<style scoped></style>
