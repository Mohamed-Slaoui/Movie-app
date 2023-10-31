<template>
    <div class="text-white">
        <h1 class="font-thin">Upcoming Movies</h1>
        <hr class="-mt-8">
        <!-- card section -->
        <div class="w-full">
            <q-carousel
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="orange"
                v-model="slider"
                infinite
                arrows
                class="sm:h-[40vh] lg:h-[60vh] overflow-hidden"
            >
                <q-carousel-slide class="pt-2 overflow-hidden bg-gray-800" v-for="(up, index) in jsonData" :key="up.id" :name="up.id">
                <div class="flex justify-center items-center sm:space-x-1 lg:space-x-2 no-wrap sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
                    <!-- Small screen -->
                    <img
                    :src="getImage(jsonData[Math.floor(Math.random() * jsonData.length)].poster_path)"
                    class="w-60 transition duration-300 ease-out hover:scale-110 hover:cursor-pointer overflow-hidden"
                    />

                    <img
                    :src="getImage(jsonData[Math.floor(Math.random() * jsonData.length)].poster_path)"
                    class="w-60 transition duration-300 ease-out hover:scale-110 hover:cursor-pointer overflow-hidden"
                    />

                    <img
                    :src="getImage(jsonData[Math.floor(Math.random() * jsonData.length)].poster_path)"
                    class="w-60 transition duration-300 ease-out hover:scale-110 hover:cursor-pointer overflow-hidden"
                    />

                    <img
                    :src="getImage(jsonData[Math.floor(Math.random() * jsonData.length)].poster_path)"
                    class="w-60 transition duration-300 ease-out hover:scale-110 hover:cursor-pointer overflow-hidden"
                    />

                    <!-- lg screen -->

                    <img
                    :src="getImage(jsonData[Math.floor(Math.random() * jsonData.length)].poster_path)"
                    class="sm:hidden md:hidden lg:flex w-60 transition duration-300 ease-out hover:scale-110 hover:cursor-pointer overflow-hidden"
                    />

                    <img
                    :src="getImage(jsonData[Math.floor(Math.random() * jsonData.length)].poster_path)"
                    class="sm:hidden md:hidden lg:flex w-60 transition duration-300 ease-out hover:scale-110 hover:cursor-pointer overflow-hidden"
                    />
                    
                </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</template>

<script setup>
    import { getApi, getImage } from '../tools/apiTools.js';
    let slider = ref(1)

    const { data } = await useFetch(getApi('upcoming'));
    const jsonData = data._rawValue.results;
</script>

<style scoped>

</style>

<!-- 









<div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-1">
            <div v-for="up in jsonData" class="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                    :src="getImage(up.poster_path)"
                    class=" transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer" 
                />
            </div>
        </div>
-->

<!-- 
    <div class="" v-if="index + 1 < jsonData.length">
                    <img
                        :src="getImage(jsonData[Math.floor(Math.random() * jsonData.length)].poster_path)"
                        class="w-60 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer overflow-hidden"
                    />
                    </div>

                    <div class="sm:hidden lg:flex flex justify-center items-center space-x-3 overflow-hidden lg:grid-cols-6 gap-2 mt-1">
                        <img
                            :src="getImage(up.poster_path)"
                            class="w-60 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer overflow-hidden"
                        />
                    
                        <div class="" v-if="index + 1 < jsonData.length">
                            <img
                                :src="getImage(jsonData[Math.floor(Math.random() * jsonData.length)].poster_path)"
                                class="w-60 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer overflow-hidden"
                            />
                    </div>
                    </div>
 -->