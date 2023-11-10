
<template>
    <div class="text-white font-primary">
        <h1 class="font-bold text-2xl pb-3 text-center">Upcoming Movies</h1>


        <div id="default-carousel" class="relative w-full " data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative sm:h-[25vh] w-full overflow-hidden md:h-96">

                <div class="hidden duration-700 ease-in-out" v-for="(i, index) in jsonData" :key="i.id" data-carousel-item>

                    <div class="flex justify-center space-x-1">
                        <!-- small and med screen -->
                        <cardImage :image="i.poster_path" :id="i.id" />
                        <cardImage v-if="index < jsonData.length - 1" :image="jsonData[index + 1].poster_path"
                            :id="jsonData[index + 1].id" />
                        <cardImage v-if="index < jsonData.length - 2" :image="jsonData[index + 2].poster_path"
                            :id="jsonData[index + 2].id" />
                        <!-- large screen -->
                        <div class="sm:hidden md:hidden lg:flex">
                            <cardImage v-if="index < jsonData.length - 3" :image="jsonData[index + 3].poster_path"
                                :id="jsonData[index + 3].id" />
                            <cardImage v-if="index < jsonData.length - 4" :image="jsonData[index + 4].poster_path"
                                :id="jsonData[index + 4].id" />
                            <cardImage v-if="index < jsonData.length - 5" :image="jsonData[index + 5].poster_path"
                                :id="jsonData[index + 5].id" />
                            <cardImage v-if="index < jsonData.length - 6" :image="jsonData[index + 6].poster_path"
                                :id="jsonData[index + 6].id" />
                        </div>
                    </div>

                </div>

            </div>
        </div>


    </div>
</template>


<script setup>
import { initFlowbite } from 'flowbite'
import { getApi, getImage } from '~/tools/apiTools';

let jsonData = ref([]);
const { data } = await useFetch(getApi('upcoming'));
jsonData = data._rawValue.results;

onMounted(() => {
    initFlowbite();

})


</script>
