<template>

  <div class="grid sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 md:gap-2 lg:gap-3 sm:gap-1 place-items-center">

    <CardImage v-for="movie in Movies" 
      :key="movie.id" 
      :image="movie.poster_path" 
      :id="movie.id" 
      class="w-40 px-[10px]"
    />
  </div>
</template>

<script setup>

const url = defineProps({
    api_key : String,
});


const { data } = await useFetch(url.api_key);
const Movies = data._rawValue.results;


</script>

<style scoped></style>
