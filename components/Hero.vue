<template>
  <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-[54vh] overflow-hidden md:h-96">
      <!-- Item 1 -->
      <div
        class="hidden duration-700 ease-in-out"
        v-for="i in jsonData"
        data-carousel-item
      >
        <img
          :src="getImage(i.backdrop_path)"
          class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
        <div
          class="absolute inset-0 bg-slate-900 h-full opacity-80 to-transparent"
        ></div>

        <div
          class="absolute px-10 space-x-4 flex justify-center items-center w-full h-full"
        >
          <!-- movie details -->

          <div class="flex justify-center space-y-8 flex-col w-72 h-full">
            <h1 class="lg:text-2xl sm:text-xs text-center font-bold">{{ i.title }}</h1>
            <p class="lg:text-sm sm:text-xs font-light text-gray-400">
              {{ shrinkOverview(i.overview) }}
            </p>
            <NuxtLink
              :to="`./movie/${i.id}`"
              type="button"
              class="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >Watch Now</NuxtLink
            >
          </div>

          <!-- poster -->
          <transition name="poster">
            <div
              class="py-4 w-72 flex items-center border border-gray-600  lg:h-[50vh] rounded-md relative transition delay-100"
            >
              <img
                :src="getImage(i.poster_path)"
                class="absolute shadow rounded-lg object-cover w-full lg:h-96 lg:max-h-full ease-in-out delay-100 transition"
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-orange-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-orange-500 dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { getApi, getImage, shrinkOverview } from "../tools/apiTools.js";
import { initFlowbite } from "flowbite";

let jsonData = ref([]);
// let isLoading = ref(true);

onMounted(() => {
  initFlowbite();
});
let test =
  "https://api.themoviedb.org/3/trending/all/day?api_key=bad062b33ad4ea1aef293cb220260cc3";
const { data } = await useFetch(getApi('popular'));
jsonData = data._rawValue.results;
</script>

<style scoped></style>
