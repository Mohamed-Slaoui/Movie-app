<template>
    <div class="bg-gray-900 w-full h-full font-primary">
        <div class="relative">
            <img class="sm:h-[93.7vh] lg:h-[94vh] w-full object-cover opacity-80" :src="getImage(Movie.backdrop_path)">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
            
                <div class="flex justify-center">
                    <div class="absolute flex justify-center space-x-2 py-3 z-30 min-w-[95%] min-h-[50vh] bottom-40 rounded-lg mx-2" style="background-color: rgb(73 68 99 / 40%)">
                    <div class=" w-[35%] relative">
                        <img 
                            :src="getImage(Movie.poster_path)" 
                            class="absolute rounded-lg object-cover w-full h-full max-h-full" 
                            :alt=" Movie.title ">
                    </div>
                    <div class=" w-[60%] flex flex-col justify-evenly space-y-1 text-white">
                            <span class="text-3xl font-bold">{{ Movie.title }}</span>
                            <span class="text-md font-medium text-orange-500">Release On: <span class="text-white">{{ Movie.release_date }}</span></span>  
                            <span class="text-md font-medium text-orange-500">Runtime: <span class="text-white">{{ Movie.runtime }} min</span></span>  
                            <div class="flex space-x-1">
                                <span v-for="i in Movie.genres" class="bg-orange-500 p-1 rounded-lg">{{i.name}}</span>  
                            </div>
                            <span class="text-xs">{{ Movie.overview }}</span>   
                            <button @click="watchTrailer" type="button" class="text-white bg-gradient-to-r w-32 from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 shadow-lg shadow-orange-500/50 font-medium rounded-lg text-sm py-2.5 text-center">Watch Trailer</button>
                    </div>
                    </div>
                </div>
                <transition name="blue">
                <div v-if="officialTrailer && clicked" class="absolute w-full h-full top-0 flex items-center justify-center z-40 transition duration-400 ease-in-out delay-200">
                        <div class="absolute inset-0 bg-slate-900 h-full opacity-80 z-10"></div>
                    
                    
                    <button @click="closeTrailer" type="button" class="absolute top-0 flex z-20 justify-center items-center space-x-1 text-white bg-gradient-to-r w-24 from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 shadow-lg shadow-orange-500/50 font-medium rounded-lg text-sm py-2.5 mt-0.5 text-center">
                        <Icon class="cursor-pointer" name="akar-icons:cross" color="white" size="18px"/>
                        <span>Close</span>
                    </button>

                    <iframe :src="getVideoURL(officialTrailer.key)" 
                        class="w-full h-[80vh] z-20"
                        frameborder="0" 
                        allowfullscreen
                    >
                    </iframe>
                </div>
                </transition>

                <!-- <div v-else>
                    <p>No official trailer found.</p>
                </div> -->
        </div>
    </div>
</template>

<script setup>
    import { getMovieById, getImage, getMovieVideoAPI, getVideoURL } from '~/tools/apiTools';
    const {id} = useRoute().params;
    const clicked = ref(false);

    const watchTrailer = () =>{
        clicked.value = true;
    }

    const closeTrailer = () =>{
        clicked.value = false;
    }


    const { data } = await useFetch(getMovieById(id),{key:id});
    const Movie = data._rawValue;

    const response = await useFetch(getMovieVideoAPI(id),{key:id});
    const videos = data._rawValue.results;

    const officialTrailer = videos.find((video) => video.type === 'Trailer' && video.site === 'YouTube');

    if (officialTrailer) {
        officialTrailer.value = officialTrailer;
    }


    useSeoMeta({
        title:  Movie.title,
    })
</script>




<style scoped>
    .blue-enter-from {
        transition: all 0.4s;
        opacity: 0;
        transform: scale(0.2);
        filter: blur(3rem);
    }
    
    .blue-leave-to{
        transition: all 0.4s;
        opacity: 0;
        transform: scale(0.5);
        filter: blur(5rem);
    }
</style>