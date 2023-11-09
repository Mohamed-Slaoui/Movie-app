<template name="fade">
  <transition>
  
  <div class="w-full text-white bg-gray-950 flex flex-col space-y-2 overflow-hidden">
    {{ searchterm }}
    <div v-if="!searchterm">
      <Hero class="font-primary"/>
      <upcoming class="px-10 py-1"/>
      <DiscoverMovies class="px-10"/>
    </div>
    <div v-else class="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 lg:gap-3 sm:gap-1 place-items-center h-full">
        <CardImage v-for="movie in Movies" 
        :key="movie.id" 
        :image="movie.poster_path" 
        :id="movie.id" 
        class="w-40 px-3 py-0.5"
        />
  </div>

  </div>

</transition>
</template>

<script setup>
  import { getMovieBySearch} from "../tools/apiTools.js";
  import {useSearchStore} from '../store/index.js'

  let Movies = ref([]);
  const stuff = useSearchStore();
  const {searchterm} = storeToRefs(stuff);

  watch(searchterm , async() => {

    console.log("am callled");

    const { data } = await useFetch(getMovieBySearch(searchterm.value));
    Movies.value = data._rawValue.results;
    })



  useSeoMeta({
      title: 'Home',
  });



  
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>