<template>
    <transition name="switch">
        <nav class=" z-50 flex justify-between items-center space-x-3 px-5 bg-black h-12 text-white font-primary">
            <div>
                <NuxtLink class="text-3xl font-bold lg:w-[30%] flex items-center" to="/"
                    style="color:white;text-decoration: none;">
                    <Icon class="cursor-pointer mb-1 "
                        name="streamline:food-popcorn-cook-corn-movie-snack-cooking-nutrition-bake" color="white"
                        size="25px" />
                    <span>Movify</span>
                </NuxtLink>
            </div>

            <div
                class="md:w-96 lg:text-lg lg:flex lg:justify-center md:justify-center space-x-5 sm:hidden md:hidden">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/series">Series</NuxtLink>
                <NuxtLink to="/pages">Pages</NuxtLink>
                <NuxtLink to="/pricing">Pricing</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </div>

            <div class="sm:w-[70%] md:w-[80%] lg:w-[30%] flex items-center md:justify-end space-x-4 sm:flex sm:justify-end">

                <div class="flex space-x-1 items-center relative">
                    <transition name="search">
                        <input 
                            @keyup="() => searchNow(searchWord)" 
                            v-show="searchBar" v-model="searchWord"
                            type="text"
                            class="rounded-md py-1 px-3 bg-gray-700 border-0 shadow-lg outline-none transition duration-400 ease-in-out delay-100 focus:outline-0 focus:ring-gray-600 placeholder:text-sm"
                            placeholder="search something...">
                    </transition>
                    <Icon @click="toggleSearchBar"
                        class="border rounded-full p-1 absolute right-1 hover:bg-gray-600 cursor-pointer"
                        name="ph:magnifying-glass" color="white" size="25px" />
                </div>

                <div>
                    <Icon class="border rounded-full p-1 hover:bg-gray-600 cursor-pointer" name="ph:bell" color="white"
                        size="25px" />
                </div>

                <div>
                    <Icon class="border rounded-full p-1 hover:bg-gray-600 cursor-pointer" name="ph:user-duotone"
                        color="white" size="25px" />
                </div>


                <!-- <button class="bg-orange-500 text-sm rounded-lg hover:bg-orange-600 sm:px-2 sm:py-2">Subscribe Now</button> -->
            </div>

            <!-- on small screens -->
            <div class="lg:hidden md:flex">
                <div class="cursor-pointer">
                    <Icon @click="toggleMenu" name="ph:list-duotone" color="white" size="25px" />
                </div>

                <Transition name="fade" v-show="Menu">
                    <div @mouseleave="toggleMenuOnMouseLeave"
                        class="space-y-3 z-50 lg:hidden md:flex-col md:justify-center md:items-center md:flex sm:flex-col sm:justify-center sm:items-center sm:flex absolute right-0 top-12 bg-gray-900 h-48 w-44 rounded-bl-md transition delay-100">
                        <NuxtLink class="hover:text-orange-400" to="/">Home</NuxtLink>
                        <NuxtLink class="hover:text-orange-400" to="/series">Series</NuxtLink>
                        <NuxtLink class="hover:text-orange-400" to="/pages">Pages</NuxtLink>
                        <NuxtLink class="hover:text-orange-400" to="/pricing">Pricing</NuxtLink>
                        <NuxtLink class="hover:text-orange-400" to="/contact">Contact</NuxtLink>
                    </div>
                </Transition>
            </div>
        </nav>
    </transition>
</template>

<script setup>
import { useSearchStore } from '../store/index.js'
let searchBar = ref(false);
let Menu = ref(false);
let searchWord = ref('');


const router = useRouter();
const stuff = useSearchStore();
const { searchNow } = useSearchStore();
const { searchterm } = storeToRefs(stuff);

    watch(searchterm, () => {
        router.push({ path: '/searchPage', query: { q: searchterm.value } });
    })

const toggleMenu = () => {
    Menu.value = !Menu.value;
}

const toggleMenuOnMouseLeave = () => {
    setTimeout(() => {
        Menu.value = false;
    }, 900);
}

const toggleSearchBar = () => {
    searchBar.value = !searchBar.value;
    searchWord.value = '';

    if (searchBar.value) {
        router.push({ path: '/searchPage'});
    }else{
        router.push({ path: '/'});
    }
}


</script>

<style scoped>
.fade-enter-from {
    transition: all 0.4s;
    transform: translateX(160px);
}

.fade-leave-to {
    transition: all 0.4s;
    transform: translateX(290px);
}

/* ------------------------------------ */

.search-enter-from {
    transition: 0.4s;
    transform: scaleX(0.3);
    /* filter: blur(1rem); */
}

.search-leave-to {
    transition: all 0.4s;
    transform: scaleX(0.5);
    opacity: 0;
    filter: blur(1rem);
}

.router-link-exact-active {
    color: orange;
}</style>