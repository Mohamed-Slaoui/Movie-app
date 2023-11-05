
<template>
    <div>
        <div class="text-white font-primary">
        <h1 class="font-bold text-2xl text-center py-5">Upcoming Movies</h1>
    </div>
        
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-80 w-full overflow-hidden md:h-96">
            
            <div class="hidden duration-700 ease-in-out" v-for="(i, index) in jsonData" :key="i.id" data-carousel-item>
                
                <div class="flex justify-center space-x-1">
                    <!-- small and med screen -->
                    <cardImage :image="i.poster_path"/>
                    <cardImage v-if="index < jsonData.length - 1" :image="jsonData[index + 1].poster_path" />
                    <cardImage v-if="index < jsonData.length - 2" :image="jsonData[index + 2].poster_path" />
                    <!-- large screen -->
                    <div class="sm:hidden md:hidden lg:flex">
                        <cardImage v-if="index < jsonData.length - 3" :image="jsonData[index + 3].poster_path" />
                        <cardImage v-if="index < jsonData.length - 4" :image="jsonData[index + 4].poster_path" />
                        <cardImage v-if="index < jsonData.length - 5" :image="jsonData[index + 5].poster_path" />
                        <cardImage v-if="index < jsonData.length - 6" :image="jsonData[index + 6].poster_path" />
                    </div>
                </div>

            </div>

        </div>
    </div>


    </div>
</template>


<script setup>
import { initFlowbite } from 'flowbite'
import { getApi,getImage } from '~/tools/apiTools';

    let jsonData = ref([]);
    const { data } = await useFetch(getApi('upcoming'));
    jsonData = data._rawValue.results;

    onMounted(()=>{
        initFlowbite();
        
    })


</script>
