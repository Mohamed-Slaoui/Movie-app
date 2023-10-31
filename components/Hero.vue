<template>
    <div class="relative">
        <h1 class="absolute z-20 sm:left-28 md:left-40 text-4xl sm:top-4 lg:left-[35%] uppercase shadow-sm text-red-600 font-extrabold">Now playing movies</h1>
        <q-spinner-ios v-if="isLoading" color="red" class="absolute sm:top-20 sm:left-72 z-50" size="5.5em" />
        <q-carousel
            class="lg:h-[60vh] sm:h-[42vh] md:h-[70vh]"
            swipeable
            animated
            v-model="slide"
            infinite
            autoplay
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
        >
        
        
        <q-carousel-slide class="p-0 overflow-hidden relative" v-for="i in jsonData" :key="i.id" :name="i.id">
            <transition name="her">
                <div class="flex justify-center">
                        <h1 class="absolute text-white z-30 text-4xl sm:top-28 lg:top-44 font-thin">{{ i.title }}</h1>
                        <button class="absolute z-50 text-white sm:top-40 lg:top-60 bg-red-600 text-sm rounded-sm hover:bg-red-700 sm:px-2 sm:py-2">Watch Now</button>
                    </div>
                </transition>
                <img
                    class="object-cover w-screen h-[130vh] "
                    :src="getImage(i.poster_path)"
                />
                <div class="absolute inset-0 bg-black opacity-80"></div>
            </q-carousel-slide>

        </q-carousel>
    </div>

</template>

<script setup>
    import { getApi, getImage } from '../tools/apiTools.js';
    let slide = ref(1)
    let isLoading = ref(false);

    const { data } = await useFetch(getApi('now_playing'));
    const jsonData = data._rawValue.results;
    if (jsonData) {
        isLoading.value = true;
        setTimeout(() => {
            isLoading.value = false;
        }, 5000);
    }

</script>

<style scoped>
    .her-enter-from {
        transition: all 0.4s;
        transform: rotate(190deg);
    }
    
    .her-leave-to{
        transition: all 0.4s;
        transform: translateY(290px);
    }
</style>
