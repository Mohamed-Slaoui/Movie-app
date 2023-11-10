<template name="fade">
  <transition>
  
  <div class="w-full text-white bg-gray-950 flex flex-col space-y-2 overflow-hidden font-primary">
    <div>
      <Hero class="font-primary"/>
      <upcoming class="px-10 py-1"/>
      <DiscoverMovies class="px-10"/>
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