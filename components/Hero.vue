<template>
    <div class="bg-gray-600 w-full h-80 text-white px-5">
        <div v-for="i in jsonData" :key="i.id" class="inline">
           <h1>{{ i.original_title }}</h1>
           <img :src="'https://image.tmdb.org/t/p/original/'+i.poster_path" alt="">
        </div>
    </div>
</template>

<script setup>
    let img_url = "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg";

    const { data } = await useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=bad062b33ad4ea1aef293cb220260cc3");
    const jsonData = data._rawValue.results;
    console.log(jsonData);





</script>
