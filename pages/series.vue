<template>
    <div class="">
        <h3 class="text-5xl font-bold text-center pt-6">Series</h3>


            <input type="text" @input="fetchMovies" v-model="txt">

        <div class="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 lg:gap-3 sm:gap-1 place-items-center h-full">

        <CardImage v-for="movie in Movies" 
        :key="movie.id" 
        :image="movie.poster_path" 
        :id="movie.id" 
        class="w-40"
        >{{ console.log(movie.title)}}</CardImage>
        </div>
    </div>
</template>


<script setup>
    import { getMovieBySearch } from '~/tools/apiTools';

    const txt = ref("");
    const Movies = ref([]);

    const fetchMovies = async () => {
    const { data } = await useFetch(getMovieBySearch(txt.value));
    Movies.value = data._rawValue.results;
    };

    


    //https://api.themoviedb.org/3/tv/popular?api_key=bad062b33ad4ea1aef293cb220260cc3
</script>